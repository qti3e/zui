import { Widget, WidgetPosition } from "./widget";
import { Point2D } from "./types";

/**
 * The canvas.
 */
export class Canvas {
  /**
   * The widgets in this element.
   */
  private children: WidgetPosition[] = [];

  /**
   *
   * @param x The x offset of the screen.
   * @param y The y offset of the screen.
   * @param widget The widget we want to add to that offset.
   */
  addWidget(x: number, y: number, widget: Widget) {
    this.children.push({ widget, position: { x, y } });
  }
}
