import { Widget } from "./widget";
import { ZuiStyle } from "./style";
import { Reactive } from "./reactive";
import { connect } from "./DFG";

export class Stack extends Widget {
  private lastY = 0;

  private scroll = new Reactive(0);

  constructor(private width: number, private height: number, style?: ZuiStyle) {
    super();
    this.style = style;

    connect(this.scroll, this);
  }

  getSize() {
    return {
      width: this.width,
      height: this.height
    };
  }

  addItem(item: Widget) {
    const size = item.getSize();
    this.addChild(0, this.lastY + 20, item);
    this.lastY += size.height;
  }

  scrollDelta(n: number) {
    this.scroll.set(this.scroll.get() + n);

    this.children.forEach(child => {
      child.position.y -= n;
    });
  }

  handleWheel(deltaX: number, deltaY: number) {
    this.scrollDelta(deltaY);
  }

  draw() {}
}
