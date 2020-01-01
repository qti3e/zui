import { Dimension, Point2D } from "./types";

export class ZuiResizeEvent implements Dimension {
  constructor(readonly width: number, readonly height: number) {}
}

export class ZuiMouseMoveEvent implements Point2D {
  constructor(readonly x: number, readonly y: number) {}
}

export class ZuiClickEvent implements Point2D {
  constructor(readonly x: number, readonly y: number) {}
}

export class ZuiWheelEvent implements Point2D {
  constructor(
    readonly x: number,
    readonly y: number,
    readonly deltaX: number,
    readonly deltaY: number
  ) {}
}

export type CanvasEvent = ZuiResizeEvent | ZuiMouseMoveEvent | ZuiClickEvent | ZuiWheelEvent;