import { Color } from "./color";

/**
 * A linear gradient stop, that is a tuple of form `[stop, color]` where
 * `stop` is a number ranging from 0 to 1 and `color` is the color in that
 * place.
 */
export type LinearGradientStop = [number, Color];

/**
 * A linear gradient.
 */
export class LinearGradient {
  /**
   * Stops in this linear gradient.
   */
  readonly stops: LinearGradientStop[];

  /**
   * Constructs a new Linear Gradient object.
   *
   * @param deg Degree of the gradient.
   * @param stops Linear gradient stops.
   */
  constructor(readonly deg: number, ...stops: LinearGradientStop[]) {
    this.stops = stops.slice();
  }
}
