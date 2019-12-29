import { Widget } from "./widget";
import { ZuiStyle } from "./style";
import { connect } from "./DFG";
import { iterator } from "./iterator";
import { iterate } from "./iterate";

function* counter(max = Infinity) {
  let add = false;
  let n = 0;
  while (true) {
    if (n <= 0 || n >= max) add = !add;

    if (add) {
      n++;
      yield 1;
    } else {
      n--;
      yield -1;
    }
  }
}

export class Stack extends Widget {
  private lastX = 0;
  private lastY = 0;
  private scrollValue = 0;

  constructor(private width: number, private height: number, style?: ZuiStyle) {
    super();
    this.style = style;

    let x = Math.random() > 0.5 ? -1 : 1;
    let stream = iterator(counter(200));
    iterate(stream, n => {
      this.scrollDelta(n);
    });
    connect(stream, this);
  }

  getSize() {
    return {
      width: this.width,
      height: this.height
    };
  }

  draw() {}

  addItem(item: Widget) {
    const size = item.getSize();
    this.addChild(this.lastX, this.lastY + 20, item);
    this.lastY += size.height;
  }

  scrollDelta(n: number) {
    this.children.forEach(child => {
      child.position.y -= n;
    });
  }

  handleMouseIn() {
    console.log("Mouse In");
  }

  handleMouseOut() {
    console.log("Mouse Out");
  }
}
