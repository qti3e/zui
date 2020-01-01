import { Widget, WidgetPosition } from "./widget";
import { ZuiReceiver, Point2D, BoundingBox } from "./types";
import { Color, ZuiStyle, Shadow, BorderRadius, ZuiTextStyle } from "./style";
import { rect } from "./clip";
import { Painter } from "./painter";
import {
  ZuiResizeEvent,
  ZuiMouseMoveEvent,
  ZuiClickEvent,
  ZuiWheelEvent,
  CanvasEvent
} from "./events";

export type CanvasOptions = {
  alpha?: boolean;
  style?: ZuiStyle;
  textStyle?: ZuiTextStyle;
};

type RenderedWidgetData = {
  clip: Path2D;
  boundingBox: BoundingBox;
};

// The default style.
const defaultStyle: Required<ZuiStyle> = Object.freeze({
  background: Color.Transparent,
  shadow: Shadow.NoShadow,
  borderRadius: BorderRadius.NoRadius
});

// The default text style.
const defaultTextStyle: Required<ZuiTextStyle> = Object.freeze({
  color: Color.Black,
  shadow: Shadow.NoShadow,
  font: "Arial",
  fontSize: 12
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
   * The default text style.
   */
  readonly defaultTextStyle: Readonly<Required<ZuiTextStyle>>;

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
   * Previous intersecting widgets that had either handleMouseIn or
   * handleMouseOut.
   */
  private mouseInOut: Widget[] = [];

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
    this.context = this.domElement.getContext("2d", {
      alpha: options && options.alpha
    })!;
    this.domElement.width = width;
    this.domElement.height = height;
    // Apply options.
    this.style = { ...defaultStyle, ...(options && options.style) };
    this.defaultTextStyle = {
      ...defaultTextStyle,
      ...(options && options.textStyle)
    };
  }

  private findIntersectingWidgetsWithEvent(
    position: Point2D,
    event: (
      | "handleMouseIn"
      | "handleMouseOut"
      | "handleClick"
      | "handleWheel"
    )[]
  ): Widget[] {
    if (event.length < 1 || event.length > 4)
      throw new Error("Unexpected argument passed.");

    const isInBoundingBox = (box: BoundingBox) =>
      position.x >= box.left &&
      position.x <= box.right &&
      position.y >= box.top &&
      position.y <= box.bottom;

    const result: Widget[] = [];

    const toSee = this.children.slice();
    for (const { widget } of toSee) {
      const data = this.widgetsData.get(widget);
      if (data && isInBoundingBox(data.boundingBox)) {
        toSee.push(...widget.children);
        if (
          (event[0] && widget[event[0]]) ||
          (event[1] && widget[event[1]]) ||
          (event[2] && widget[event[2]]) ||
          (event[3] && widget[event[3]])
        )
          result.push(widget);
      }
    }

    return result;
  }

  receive(event: CanvasEvent) {
    if (event instanceof ZuiResizeEvent) {
      this.width = event.width;
      this.height = event.height;
      this.redraw();
    }

    if (event instanceof ZuiMouseMoveEvent) {
      const mouseInOut = this.findIntersectingWidgetsWithEvent(event, [
        "handleMouseIn",
        "handleMouseOut",
        "handleClick"
      ]);

      // Fire mouse out event.
      for (const x of this.mouseInOut)
        if (x.handleMouseOut && mouseInOut.indexOf(x) < 0) x.handleMouseOut();

      // Fire mouse in event.
      let clickable = false;
      for (const x of mouseInOut) {
        if (x.handleMouseIn && this.mouseInOut.indexOf(x) < 0)
          x.handleMouseIn();
        if (x.handleClick) clickable = true;
      }

      const style = this.domElement.style;
      const cursor = clickable ? "pointer" : "default";
      if (style.cursor !== cursor) style.cursor = cursor;

      this.mouseInOut = mouseInOut;
    }

    if (event instanceof ZuiClickEvent) {
      const widgets = this.findIntersectingWidgetsWithEvent(event, [
        "handleClick"
      ]);

      if (widgets.length) {
        const widget = widgets[widgets.length - 1];
        const box = this.widgetsData.get(widget)!.boundingBox;
        const x = event.x - box.left;
        const y = event.y - box.top;
        widget.handleClick!(x, y);
      }
    }

    if (event instanceof ZuiWheelEvent) {
      const widgets = this.findIntersectingWidgetsWithEvent(event, [
        "handleWheel"
      ]);

      if (widgets.length) {
        const widget = widgets[widgets.length - 1];
        widget.handleWheel!(event.deltaX, event.deltaY);
      }
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
    this.translateY += position.y;

    const width = widget.width.valueOf();
    const height = widget.height.valueOf();
    const shadow = this.getStyle(widget, "shadow");
    const radius = this.getStyle(widget, "borderRadius");
    const boundingBox = {
      left: this.translateX,
      right: this.translateX + width,
      top: this.translateY,
      bottom: this.translateY + height
    };

    // Construct the clip.
    const clip = new Path2D();
    rect(clip, width, height, radius);

    // Save the data of this widget.
    this.widgetsData.set(widget, { boundingBox, clip });

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
    widget.draw(
      new Painter(
        context,
        this.translateX,
        this.translateY,
        this.defaultTextStyle
      )
    );

    // 3. Draw children.
    for (const child of widget.children) {
      if (
        child.position.x > width ||
        child.position.y > height ||
        child.position.x + child.widget.width.valueOf() < 0 ||
        child.position.y + child.widget.height.valueOf() < 0
      )
        continue;
      this.draw(child.position, child.widget);
    }

    context.restore();
    this.translateX -= position.x;
    this.translateY -= position.y;

    // Call afterDraw.
    if (widget.afterDraw) widget.afterDraw();
  }
}