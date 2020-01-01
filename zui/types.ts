import { Reactive } from "./reactive";

/**
 * An emitter.
 */
export interface ZuiEmitter<T = unknown> {
  /**
   * How many polls can we do at each frame.
   */
  maxPerFrame: number;

  /**
   * Called to get the new data, if any.
   */
  poll(): T | undefined;
}

/**
 * An object that can handle emitted data.
 */
export interface ZuiReceiver<T = unknown> {
  /**
   * Handle the received data.
   *
   * @param data
   */
  receive(data: T): void;
}

/**
 * Dimension object.
 */
export interface Dimension {
  width: number;
  height: number;
}

/**
 * A 2D point.
 */
export interface Point2D {
  x: number;
  y: number;
}

/**
 * A reactive 2D point.
 */
export interface ReactivePoint2D {
  x: Reactive<number> | number;
  y: Reactive<number> | number;
}

export interface BoundingBox {
  left: number;
  right: number;
  top: number;
  bottom: number;
}
