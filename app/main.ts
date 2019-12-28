import * as zui from "../lib";
import { ZuiStyle } from "../lib/style";

// ---

class Sidebar extends zui.Widget {
  style: ZuiStyle = {
    background: zui.Color.RGBA(0xff, 0, 0, 1),
    borderRadius: zui.BorderRadius.All(50, 100).add(zui.BorderRadius.TLBR(50)),
    shadow: new zui.Shadow(0, 0, zui.Color.White, 5)
  };

  getSize() {
    return {
      width: 400,
      height: 250
    };
  }

  draw() {}
}

class App extends zui.Widget {
  style: ZuiStyle = {};

  constructor() {
    super();

    this.addChild(100, 100, new Sidebar());
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
document.body.style.background = canvas.style.background.toString();

zui.connect(
  zui.map(
    zui.event("resize", window),
    () => new zui.ResizeEvent(window.innerWidth, window.innerHeight)
  ),
  canvas
);

// ---

function render() {
  zui.handleNextTick();
  requestAnimationFrame(render);
}

render();
