import { Reactive } from "./reactive";
import { event } from "./event";
import { connect } from "./DFG";
import { map } from "./map";

export const pageWidth = new Reactive(0);

export const pageHeight = new Reactive(0);

export function initDimension() {
  pageWidth.set(window.innerWidth);
  pageHeight.set(window.innerHeight);

  const resize = event("resize", window);
  connect(
    map(resize, () => window.innerWidth),
    pageWidth
  );
  connect(
    map(resize, () => window.innerHeight),
    pageHeight
  );
}
