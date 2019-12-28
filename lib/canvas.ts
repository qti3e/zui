import { Widget, WidgetPosition } from "./widget";
import { ZuiReceiver, Dimension, Point2D } from "./types";
import { Color } from "./style";

export class ResizeEvent implements Dimension {
  constructor(readonly width: number, readonly height: number) {}
}

export type CanvasEvent = ResizeEvent;

export type CanvasOptions = {
  background?: Color;
  alpha?: boolean;
};

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
   * Background color.
   */
  private background: Color;

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
    this.background = options?.background || Color.Grey;
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

    this.context.fillStyle = this.background.toString();
    this.context.fillRect(0, 0, this.width, this.height);

    for (const child of this.children) {
      this.draw(child.position, child.widget);
    }
  }

  private draw(position: Point2D, widget: Widget) {
    const { context } = this;
    context.save();
    context.translate(position.x, position.y);

    const size = widget.getSize();

    // 0. Draw background.
    context.shadowColor = "white";
    context.shadowBlur = 15;
    context.shadowOffsetX = 15;
    context.fillStyle = widget.background.toString();
    context.fillRect(0, 0, size.width, size.height);

    // 1. Clip
    context.beginPath();
    context.moveTo(0, 0);
    context.rect(0, 0, size.width, size.height);
    context.clip();

    // 2. Draw element.
    widget.draw();

    // 3. Draw children.
    for (const child of widget.children)
      this.draw(child.position, child.widget);

    context.restore();

    // Call afterDraw.
    if (widget.afterDraw) widget.afterDraw();
  }
}
