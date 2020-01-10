import { Widget } from "../widget";
import { Reactive } from "../reactive";
import { Colors } from "../colors";

export class Stack extends Widget {
  readonly height: Reactive<number> = new Reactive(0, this);
  private items: Widget[] = [];
  style = {
    background: Colors.transparent
  };

  constructor(readonly width: number, readonly spaceBetween: number = 10) {
    super();
  }

  addItem(widget: Widget) {
    if (typeof widget.height !== "number")
      throw new Error("Stack does not support dynamic sized elements yet.");

    this.addChild(widget);

    let y = 0;
    for (let i = 0; i < this.items.length; ++i)
      y += +this.items[i].height + this.spaceBetween;

    this.items.push(widget);
    widget.y.set(y);
    widget.x.set(0);
    this.height.set(
      this.height.get() + widget.height.valueOf() + this.spaceBetween
    );
  }

  removeItem(widget: Widget) {
    this.removeChild(widget);
    const index = this.items.indexOf(widget);
    if (index < 0) return;

    this.items.splice(index, 1);

    const height = widget.height.valueOf() + this.spaceBetween;
    for (let i = index; i < this.items.length; ++i) {
      const item = this.items[i];
      item.y.set(item.y.get() - height);
    }

    this.height.set(this.height.get() - height);
  }

  clear() {
    for (let i = 0; i < this.items.length; ++i) {
      const widget = this.items[i];
      this.removeChild(widget);
    }

    this.height.set(0);
    this.items.length = 0;
  }

  draw() {}
}
