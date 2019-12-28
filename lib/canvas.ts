import { Widget, WidgetPosition } from "./widget";
import { ZuiReceiver, Dimension, Point2D } from "./types";
import { Color, ZuiStyle, Shadow, BorderRadius } from "./style";
import { rect } from "./clip";

export class ResizeEvent implements Dimension {
  constructor(readonly width: number, readonly height: number) {}
}

export type CanvasEvent = ResizeEvent;

export type CanvasOptions = {
  alpha?: boolean;
  style?: ZuiStyle;
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

    const size = widget.getSize();
    const shadow = this.getStyle(widget, "shadow");
    const radius = this.getStyle(widget, "borderRadius");

    // 0. Container & Background
    context.shadowColor = shadow.color.toString();
    context.shadowBlur = shadow.blur;
    context.shadowOffsetX = shadow.offsetX;
    context.shadowOffsetY = shadow.offsetY;
    context.fillStyle = this.getStyle(widget, "background").toString();
    rect(context, size.width, size.height, radius);
    context.fill();

    // 1. Clip
    rect(context, size.width, size.height, radius);
    context.clip();

    // 1. Draw element.
    widget.draw();

    // 3. Draw children.
    for (const child of widget.children)
      this.draw(child.position, child.widget);

    context.restore();

    // Call afterDraw.
    if (widget.afterDraw) widget.afterDraw();
  }
}
