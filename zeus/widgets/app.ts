import {
  Widget,
  pageWidth,
  pageHeight,
  ZuiStyle,
  Color,
  connect,
  Painter,
  Spline,
  Text
} from "../../zui";
import { Sidebar } from "./sidebar";

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

  private t = new Text("🌏 Earth", {
    fontSize: 50,
    color: Color.HEX(0xfd7014)
  });

  draw(painter: Painter) {
    painter.drawZuiPath(200, 800, this.p.getPath(), 10);
    painter.drawText(100, 100, this.t);
  }
}

function p(x: number, y: number) {
  return { x, y };
}
