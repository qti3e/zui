import * as z from "../../../zui";
import { shadow2, foreground4 } from "../../style";
import { ContextMenu } from "../../../zui";

export class TypesEditorBoard extends z.Widget {
  readonly width = 5000;
  readonly height = 3000;
  readonly draggable = new z.Draggable();
  readonly nodeEditor = new z.NodeEditor(this);
  style: z.ZuiStyle = {
    shadow: shadow2
  };

  constructor() {
    super();

    this.addChild(this.nodeEditor);
  }

  handleContextMenu(ctx: ContextMenu) {
    ctx.addMenuItem(new z.Text("Add Item"), () => {
      console.log("Hello");
    });
  }

  draw(painter: z.Painter) {
    for (let i = 0; i < this.width; i += 30) {
      painter.line(
        {
          type: "straight",
          from: { x: i, y: 0 },
          to: { x: i, y: this.height }
        },
        {
          width: 1,
          color: foreground4,
          shadow: z.Shadow.NoShadow
        }
      );
    }

    for (let i = 0; i < this.width; i += 30) {
      painter.line(
        {
          type: "straight",
          from: { x: 0, y: i },
          to: { x: this.width, y: i }
        },
        {
          width: 1,
          color: foreground4,
          shadow: z.Shadow.NoShadow
        }
      );
    }
  }
}
