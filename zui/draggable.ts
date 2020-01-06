import { Widget } from "./widget";

export class Draggable {
  private moving: Widget | undefined;
  private x = 0;
  private y = 0;

  start(widget: Widget, x: number, y: number) {
    this.moving = widget;
    this.x = x;
    this.y = y;
  }

  stop(widget: Widget) {
    this.moving = undefined;
  }

  handleMouseMove(x: number, y: number) {
    if (!this.moving) return;
    this.moving.x.set(x - this.x);
    this.moving.y.set(y - this.y);
  }
}
