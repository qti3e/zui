import { Dimension, Point2D } from "./types";

export class ZuiResizeEvent implements Dimension {
  constructor(readonly width: number, readonly height: number) {}
}

export class ZuiMouseDownEvent implements Point2D {
  constructor(readonly x: number, readonly y: number) {}
}

export class ZuiMouseUpEvent implements Point2D {
  constructor(readonly x: number, readonly y: number) {}
}

export class ZuiMouseMoveEvent implements Point2D {
  constructor(readonly x: number, readonly y: number) {}
}

export class ZuiClickEvent implements Point2D {
  constructor(readonly x: number, readonly y: number) {}
}

export type ZuiKeys = Readonly<{
  meta: boolean;
  alt: boolean;
  ctrl: boolean;
  shift: boolean;
}>;

export class ZuiKeydownEvent {
  constructor(
    readonly keycode: number,
    readonly key: string,
    readonly keys: ZuiKeys
  ) {}
}

export class ZuiKeyupEvent {
  constructor(
    readonly keycode: number,
    readonly key: string,
    readonly keys: ZuiKeys
  ) {}
}

export class ZuiWheelEvent implements Point2D {
  constructor(
    readonly x: number,
    readonly y: number,
    readonly deltaX: number,
    readonly deltaY: number
  ) {}
}

export type CanvasEvent =
  | ZuiResizeEvent
  | ZuiMouseDownEvent
  | ZuiMouseUpEvent
  | ZuiMouseMoveEvent
  | ZuiClickEvent
  | ZuiWheelEvent
  | ZuiKeydownEvent
  | ZuiKeyupEvent;
