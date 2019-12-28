import * as zui from "../lib";

// ---

class Sidebar extends zui.Widget {
  background = zui.Color.RGB(0xff, 0, 0);

  getSize() {
    return {
      width: 48,
      height: window.innerHeight
    };
  }

  draw() {}
}

class App extends zui.Widget {
  constructor() {
    super();

    this.addChild(0, 0, new Sidebar());
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
