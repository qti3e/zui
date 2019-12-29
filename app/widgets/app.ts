import {
  Widget,
  pageWidth,
  pageHeight,
  ZuiStyle,
  Color,
  connect
} from "../../lib";
import { Sidebar } from "./sidebar";

export class App extends Widget {
  style: ZuiStyle = {
    background: Color.RGB(0xff, 0xfc, 0xf3)
  };

  width = pageWidth;

  height = pageHeight;

  constructor() {
    super();

    // Listen for changes on the emitter.
    connect(this.width, this);
    connect(this.height, this);

    // Add children.
    this.addChild(0, 0, new Sidebar());
  }

  draw() {}
}
