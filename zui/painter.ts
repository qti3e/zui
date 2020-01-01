import { Reactive } from "./reactive";
import { ZuiTextStyle, Color } from "./style";
import { Text } from "./text";

type Pixel = number | Reactive<number>;

export class Painter {
  constructor(
    private readonly backend: CanvasRenderingContext2D,
    private readonly translateX: number,
    private readonly translateY: number,
    private readonly defaultTextStyle: Required<ZuiTextStyle>
  ) {}

  drawZuiPath(
    x: number,
    y: number,
    path: Readonly<Int16Array | Int8Array | Int32Array>,
    scale = 1,
    lineWidth = 3,
    color: Color = Color.White
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

  moveTo(x: Pixel, y: Pixel) {
    this.backend.moveTo(x.valueOf(), y.valueOf());
  }

  lineTo(x: Pixel, y: Pixel) {
    this.backend.lineTo(x.valueOf(), y.valueOf());
  }
}
