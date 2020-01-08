import { Widget } from "../widget";

export class Draggable {
  private moving: Widget | undefined;
  private innerX = 0;
  private innerY = 0;
  private actualX = 0;
  private actualY = 0;

  constructor(readonly snap = 30) {}

  start(widget: Widget, x: number, y: number) {
    this.moving = widget;
    this.innerX = x;
    this.innerY = y;
    this.actualX = widget.x.valueOf();
    this.actualY = widget.y.valueOf();
  }

  stop(widget: Widget) {
    if (this.moving === widget) this.moving = undefined;
  }

  handleMouseMove(x: number, y: number) {
    if (!this.moving) return;

    this.actualX = x - this.innerX;
    this.actualY = y - this.innerY;

    const snappedX = ((this.actualX / this.snap) | 0) * this.snap;
    const snappedY = ((this.actualY / this.snap) | 0) * this.snap;

    this.moving.x.set(snappedX);
    this.moving.y.set(snappedY);
  }
}
