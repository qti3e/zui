import * as zui from "../lib";
import { App } from "./widgets/app";

// Create canvas.

const canvas = new zui.Canvas(window.innerWidth, window.innerHeight);
canvas.addWidget(0, 0, new App());

// ----

document.body.appendChild(canvas.domElement);
canvas.domElement.style.position = "fixed";
canvas.domElement.style.left = "0";
canvas.domElement.style.top = "0";
document.body.style["overscrollBehavior" as any] = "none";

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
