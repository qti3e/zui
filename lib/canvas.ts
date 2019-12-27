import { Widget } from "./widget";
import { Point2D } from "./types";

/**
 * The canvas.
 */
export class Canvas {
  /**
   * The widgets in this element.
   */
  private children: Widget[] = [];

  /**
   * Absolute starting position of every widget, the most top-left corner is
   * (0, 0).
   */
  private positions = new WeakMap<Widget, Point2D>();

  /**
   * 
   * @param x The x offset of the screen.
   * @param y The y offset of the screen.
   * @param widget The widget we want to add to that offset.
   */
  addWidget(x: number, y: number, widget: Widget) {
    this.children.push(widget);
  }

  /**
   * Process a click event.
   * 
   * @param x The x offset (pixels from the left).
   * @param y The y offset (pixels from the top).
   */
  click(x: number, y: number) {

  }
}