import * as zui from "../lib";
import { ZuiStyle } from "../lib/style";

// ---

class Item extends zui.Widget {
  private color = new zui.Reactive("#fff");

  constructor() {
    super();
    zui.connect(this.color, this);
  }

  getSize() {
    return {
      width: 220,
      height: 70
    };
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.moveTo(10, 10);
    ctx.fillStyle = this.color.get();
    ctx.fillRect(10, 10, 200, 50);
  }

  handleClick() {
    if (this.color.get() === "#fff") this.color.set("#ffff00");
    else this.color.set("#fff");
  }
}

class Sidebar extends zui.Widget {
  style: ZuiStyle = {
    background: zui.Color.RGB(0x80, 0x80, 0x80)
  };

  getSize() {
    return {
      width: 48,
      height: window.innerHeight
    };
  }

  draw(ctx: CanvasRenderingContext2D) {}
}

class App extends zui.Widget {
  style: ZuiStyle = {
    background: zui.Color.RGB(0x41, 0x41, 0x41)
  };

  constructor() {
    super();
    this.addChild(0, 0, new Sidebar());

    const fn = (x, y) => {
      const stack = new zui.Stack(220, 190, { background: zui.Color.Black });
      stack.addItem(new Item());
      stack.addItem(new Item());
      stack.addItem(new Item());
      stack.addItem(new Item());
      stack.addItem(new Item());
      this.addChild(x, y, stack);
    };

    const lh = y => {
      return;
      let x = 60;
      fn(x, y);
      fn((x += 230), y);
      fn((x += 230), y);
      fn((x += 230), y);
      fn((x += 230), y);
      fn((x += 230), y);
    };

    let y = 15;
    lh(y);
    lh((y += 200));
    lh((y += 200));
    lh((y += 200));

    fn(300, 200);
  }

  getSize() {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  draw() {}
}

// Create canvas.

const canvas = new zui.Canvas(window.innerWidth, window.innerHeight);
canvas.addWidget(0, 0, new App());

// ----

document.body.appendChild(canvas.domElement);
canvas.domElement.style.position = "fixed";
canvas.domElement.style.left = "0";
canvas.domElement.style.top = "0";
document.body.style.background = "#414141";
document.body.style["overscrollBehavior"] = "none";

zui.connect(
  zui.combine(
    zui.map(
      zui.event("wheel", canvas.domElement),
      event => new zui.Wheel(event.x, event.y, event.deltaX, event.deltaY)
    ),
    zui.map(
      zui.event("click", canvas.domElement),
      event => new zui.Click(event.x, event.y)
    ),
    zui.map(
      zui.event("mousemove", canvas.domElement),
      event => new zui.MouseMove(event.x, event.y)
    ),
    zui.map(
      zui.event("resize", window),
      () => new zui.ResizeEvent(window.innerWidth, window.innerHeight)
    )
  ),
  canvas
);

// ---

function render() {
  zui.handleNextTick();
  requestAnimationFrame(render);
}

render();
