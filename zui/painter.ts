import { Reactive } from "./reactive";
import { ZuiTextStyle, ZuiLineStyle } from "./style";
import { Text } from "./text";
import { Color } from "./color";
import { Colors } from "./colors";
import {
  Line,
  drawVerticalRLine,
  drawTopDownLine,
  drawClaspLeft,
  drawRightLeftLine,
  drawHorizontalLine,
  drawCornerTopLine,
  drawCornerDownLine,
  drawLeftRightLine
} from "./lines";

export class Painter {
  constructor(
    private readonly backend: CanvasRenderingContext2D,
    private readonly translateX: number,
    private readonly translateY: number,
    private readonly defaultTextStyle: Required<ZuiTextStyle>,
    private readonly defaultLineStyle: Required<ZuiLineStyle>
  ) {}

  drawZuiPath(
    x: number,
    y: number,
    path: Readonly<Int16Array | Int8Array | Int32Array>,
    scale = 1,
    lineWidth = 3,
    color: Color = Colors.white
  ) {
    const ctx = this.backend;
    ctx.strokeStyle = color.toString();
    ctx.lineWidth = lineWidth;
    ctx.beginPath();

    loop: for (let i = 0; ; ) {
      const m = path[i++];
      switch (m) {
        // moveTo followed by a bezierCurveTo
        case 1:
          ctx.moveTo(path[i++] * scale + x, path[i++] * scale + y);
        // A single bezierCurveTo
        case 0:
          ctx.bezierCurveTo(
            path[i++] * scale + x,
            path[i++] * scale + y,
            path[i++] * scale + x,
            path[i++] * scale + y,
            path[i++] * scale + x,
            path[i++] * scale + y
          );
          break;
        // moveTo followed by a lineTo
        case 4:
          ctx.moveTo(path[i++] * scale + x, path[i++] * scale + y);
        // Just a lineTo
        case 3:
          ctx.lineTo(path[i++] * scale + x, path[i++] * scale + y);
          break;
        // End of the path.
        case 2:
          break loop;
        default:
          throw new Error("Invalid Path.");
      }
    }
    ctx.stroke();
  }

  drawText(x: number, y: number, text: Text) {
    text.render(this.backend, this.defaultTextStyle, x, y);
  }

  line(line: Line, style?: ZuiLineStyle) {
    const ctx = this.backend;
    ctx.strokeStyle = (
      (style && style.color) ||
      this.defaultLineStyle.color
    ).toString();
    ctx.lineWidth = (style && style.width) || this.defaultLineStyle.width;
    const shadow = (style && style.shadow) || this.defaultLineStyle.shadow;
    ctx.shadowOffsetX = shadow.offsetX;
    ctx.shadowOffsetY = shadow.offsetY;
    ctx.shadowBlur = shadow.blur;
    ctx.shadowColor = shadow.color.toString();

    const x0 = line.from.x;
    const y0 = line.from.y;
    const x1 = line.to.x;
    const y1 = line.to.y;

    ctx.beginPath();

    switch (line.type) {
      case "straight":
        ctx.moveTo(x0, y0);
        ctx.lineTo(x1, y1);
        break;
      case "verticalR":
        drawVerticalRLine(ctx, x0, y0, x1, y1);
        break;
      case "topDown":
        drawTopDownLine(ctx, x0, y0, x1, y1);
        break;
      case "claspLeft":
        drawClaspLeft(ctx, x0, y0, x1, y1);
        break;
      case "rightLeft":
        drawRightLeftLine(ctx, x0, y0, x1, y1);
        break;
      case "leftRight":
        drawLeftRightLine(ctx, x0, y0, x1, y1);
        break;
      case "horizontalR":
        drawHorizontalLine(ctx, y0, x0, x1);
        break;
      case "cornerTop":
        drawCornerTopLine(ctx, x0, y0, x1, y1);
        break;
      case "cornerDown":
        drawCornerDownLine(ctx, x0, y0, x1, y1);
        break;
    }

    ctx.stroke();
  }
}
