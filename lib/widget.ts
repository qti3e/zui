import { Dimension } from "./types";

export abstract class Widget {
  /**
   * Should return the size which this widget requires.
   */
  abstract getSize(): Dimension;

  /**
   * Draw the widget.
   */
  abstract draw(): void;
}