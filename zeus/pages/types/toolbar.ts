import * as z from "../../../zui";
import { background1, shadow1Hor, foreground1 } from "../../style";

export class Toolbar extends z.Widget {
  style: z.ZuiStyle = {
    background: background1,
    shadow: shadow1Hor
  };

  readonly height = 50;
  readonly title = new z.Text("Types", {
    color: foreground1,
    fontSize: 30
  });

  constructor(readonly width: z.Reactive<number>) {
    super();
  }

  draw(painter: z.Painter) {
    painter.drawText(20, 10, this.title);
  }
}
