import {
  Widget,
  pageWidth,
  pageHeight,
  ZuiStyle,
  Color,
  connect,
  Painter,
  Spline
} from "../../lib";
import { Sidebar } from "./sidebar";
import icon from "../icons/chess-king.svg";

export class App extends Widget {
  style: ZuiStyle = {
    background: Color.RGB(0x39, 0x3e, 0x46)
  };

  width = pageWidth;

  height = pageHeight;

  private p = new Spline(
    p(0, 0),
    p(0, -30),
    p(30, -30),
    p(30, -60),
    p(60, -60)
  );

  constructor() {
    super();

    // Listen for changes on the emitter.
    connect(this.width, this);
    connect(this.height, this);

    // Add children.
    this.addChild(0, 0, new Sidebar());
  }

  draw(painter: Painter) {
    painter.drawZuiPath(200, 800, this.p.getPath(), 10);
  }
}

function p(x: number, y: number) {
  return { x, y };
}
