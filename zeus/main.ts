import * as zui from "../zui";
import { App } from "./widgets/app";
import { initDimension } from "../zui";

// Create canvas.

initDimension();
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
      event =>
        new zui.ZuiWheelEvent(event.x, event.y, event.deltaX, event.deltaY)
    ),
    zui.map(
      zui.event("click", canvas.domElement),
      event => new zui.ZuiClickEvent(event.x, event.y)
    ),
    zui.map(
      zui.event("mousedown", canvas.domElement),
      event => new zui.ZuiMouseDownEvent(event.x, event.y)
    ),
    zui.map(
      zui.event("mouseup", canvas.domElement),
      event => new zui.ZuiMouseUpEvent(event.x, event.y)
    ),
    zui.map(
      zui.event("mousemove", canvas.domElement),
      event => new zui.ZuiMouseMoveEvent(event.x, event.y)
    ),
    zui.map(
      zui.event("resize", window),
      () => new zui.ZuiResizeEvent(window.innerWidth, window.innerHeight)
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

(window as any)["zui"] = zui;
