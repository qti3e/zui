import { Reactive } from "./reactive";
import { event } from "./event";
import { connect } from "./DFG";
import { map } from "./map";

export const pageWidth = new Reactive(window.innerWidth);

export const pageHeight = new Reactive(window.innerHeight);

const resize = event("resize", window);
connect(
  map(resize, () => window.innerWidth),
  pageWidth
);
connect(
  map(resize, () => window.innerHeight),
  pageHeight
);
