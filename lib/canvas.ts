import { Widget, WidgetPosition } from "./widget";
import { ZuiReceiver, Dimension, Point2D } from "./types";
import { Color, ZuiStyle, Shadow, BorderRadius, Background } from "./style";
import { rect } from "./clip";

export class ResizeEvent implements Dimension {
  constructor(readonly width: number, readonly height: number) {}
}

export type CanvasEvent = ResizeEvent;

export type CanvasOptions = {
  alpha?: boolean;
  style?: ZuiStyle;
};

type RenderedWidgetData = {
  position: Point2D;
  clip: Path2D;
  size: Dimension;
};

// The default style.
const defaultStyle: Required<ZuiStyle> = Object.freeze({
  background: Color.Grey,
  shadow: Shadow.NoShadow,
  borderRadius: BorderRadius.NoRadius
});

/**
 * The canvas.
 */
export class Canvas implements ZuiReceiver<CanvasEvent> {
  /**
   * The widgets in this element.
   */
  private children: WidgetPosition[] = [];

  /**
   * The DOM Canvas element.
   */
  readonly domElement: HTMLCanvasElement;

  /**
   * The Context2D of the DOM canvas.
   */
  readonly context: CanvasRenderingContext2D;

  /**
   * The canvas global style.
   */
  readonly style: Readonly<Required<ZuiStyle>>;

  /**
   * Last absolute position and size of every child in the current canvas.
   */
  private widgetsData = new WeakMap<Widget, RenderedWidgetData>();

  /**
   * Current translate x.
   */
  private translateX = 0;

  /**
   * Current translate y.
   */
  private translateY = 0;

  /**
   * Cache widgets to canvases.
   */
  private static widgetsToCanvasMap = new WeakMap<Widget, Canvas>();

  /**
   * Find the canvas which owns the given widget.
   *
   * @param widget The widget which we wish to find to find its container canvas.
   */
  static canvasOf(widget: Widget): Canvas | undefined {
    const parentCache = Canvas.widgetsToCanvasMap.get(widget);
    if (parentCache) return parentCache;
    let current: Widget | Canvas | undefined = widget;
    while (current && !(current instanceof Canvas))
      current = Widget.parentOf(current);
    if (!current) return;
    Canvas.widgetsToCanvasMap.set(widget, current);
    return current;
  }

  /**
   *
   * @param x The x offset of the screen.
   * @param y The y offset of the screen.
   * @param widget The widget we want to add to that offset.
   */
  addWidget(x: number, y: number, widget: Widget) {
    this.children.push({ widget, position: { x, y } });
    this.redraw();
  }

  constructor(
    private width: number,
    private height: number,
    options?: CanvasOptions
  ) {
    this.domElement = document.createElement("canvas");
    this.context = this.domElement.getContext("2d", { alpha: options?.alpha })!;
    this.domElement.width = width;
    this.domElement.height = height;
    // Apply options.
    this.style = { ...defaultStyle, ...options?.style };
  }

  receive(event: CanvasEvent) {
    if (event instanceof ResizeEvent) {
      this.width = event.width;
      this.height = event.height;
      this.redraw();
    }
  }

  redraw() {
    this.domElement.width = this.width;
    this.domElement.height = this.height;

    this.context.fillStyle = this.style.background.toString();
    this.context.fillRect(0, 0, this.width, this.height);

    for (const child of this.children) {
      this.draw(child.position, child.widget);
    }
  }

  private getStyle<K extends keyof ZuiStyle>(
    widget: Widget,
    key: K
  ): NonNullable<ZuiStyle[K]> {
    if (!widget.style) return this.style[key]!;

    if (widget.style[key]) return widget.style[key]!;

    return this.style[key]!;
  }

  private draw(position: Point2D, widget: Widget) {
    const { context } = this;
    context.save();
    context.translate(position.x, position.y);
    this.translateX += position.x;
    this.translateY += position.x;

    const size = widget.getSize();
    const shadow = this.getStyle(widget, "shadow");
    const radius = this.getStyle(widget, "borderRadius");

    // Construct the clip.
    const clip = new Path2D();
    rect(clip, size.width, size.height, radius);

    // Save the data of this widget.
    this.widgetsData.set(widget, {
      position: {
        x: this.translateX,
        y: this.translateY
      },
      clip,
      size
    });

    // Store this.
    Canvas.widgetsToCanvasMap.set(widget, this);

    // 0. Container & Background
    context.shadowColor = shadow.color.toString();
    context.shadowBlur = shadow.blur;
    context.shadowOffsetX = shadow.offsetX;
    context.shadowOffsetY = shadow.offsetY;
    context.fillStyle = this.getStyle(widget, "background").toString();
    context.fill(clip);

    // 1. Clip
    context.clip(clip);

    // 1. Draw element.
    widget.draw(context);

    // 3. Draw children.
    for (const child of widget.children)
      this.draw(child.position, child.widget);

    context.restore();
    this.translateX -= position.x;
    this.translateY -= position.x;

    // Call afterDraw.
    if (widget.afterDraw) widget.afterDraw();
  }

  drawWidget(widget: Widget) {
    const data = this.widgetsData.get(widget);

    // If this is a top level widget, render it using draw method.
    if (data && Widget.parentOf(widget) === this)
      return this.draw(data.position, widget);

    // If it's not rendered already and we do not have enough data to re-render
    // try rendering its parent instead.
    if (!data) {
      const parent = Widget.parentOf(widget);
      if (parent instanceof Canvas)
        throw new Error("Widget belongs to another canvas.");
      else if (parent) this.drawWidget(parent);
      return;
    }

    const { context } = this;
    context.save();

    // Collect parents to have the right clipping, we want to keep changes
    // in the current widget.

    // From current element to a top-level one.
    const hierarchy: Widget[] = [];
    const backgrounds: Background[] = [];
    let nonAlphaIndex = -1;

    for (
      let current: Canvas | Widget | undefined = widget;
      current instanceof Widget;
      current = Widget.parentOf(widget)
    ) {
      const { position, clip } = this.widgetsData.get(current)!;
      // Get the background.
      const background = this.getStyle(widget, "background");
      backgrounds.push(background);
      hierarchy.push(current);
      // Clip.
      context.translate(position.x, position.y);
      context.clip(clip);
      context.translate(-position.x, -position.y);
      // Find the first parent with a full color background.
      if (nonAlphaIndex < 0) {
        if (background instanceof Color && background.alpha === 1) {
          nonAlphaIndex = backgrounds.length - 1;
        }
      }
    }

    // Now render backgrounds, i > 0: We don't want to render the current widget.
    for (
      let i = hierarchy.length - 1;
      i > Math.max(nonAlphaIndex - 1, 0);
      --i
    ) {
      const widget = hierarchy[i];
      const { position, size } = this.widgetsData.get(widget)!;
      context.fillStyle = this.getStyle(widget, "background").toString();
      context.fillRect(position.x, position.y, size.width, size.height);
    }

    // Redraw the element.
    this.draw(data.position, widget);

    context.restore();
  }
}
