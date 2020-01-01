import { ZuiTextStyle } from "./style";

export class Text {
  private cache = new WeakMap<ZuiTextStyle, HTMLCanvasElement>();
  readonly style: Readonly<ZuiTextStyle>;

  constructor(readonly text: string, style?: Readonly<ZuiTextStyle>) {
    this.style = { ...style };
  }

  render(
    ctx: CanvasRenderingContext2D,
    defaultTextStyle: Readonly<Required<ZuiTextStyle>>,
    x: number,
    y: number
  ): void {
    const cache = this.cache.get(defaultTextStyle);
    if (cache) return ctx.drawImage(cache, x, y - 15);

    const style = { ...defaultTextStyle, ...this.style };
    const canvas = document.createElement("canvas");
    const canvasCtx = canvas.getContext("2d")!;
    this.cache.set(defaultTextStyle, canvas);

    const shadow = style.shadow;
    const font = `${style.fontSize}px ${style.font}`;
    canvasCtx.font = font;

    const size = canvasCtx.measureText(this.text);
    const sizeM = canvasCtx.measureText("M");
    canvas.width = size.width;
    canvas.height = sizeM.width * 1.75 + 15;

    // Again.
    canvasCtx.font = font;
    canvasCtx.fillStyle = style.color.toString();
    canvasCtx.shadowBlur = shadow.blur;
    canvasCtx.shadowColor = shadow.color.toString();
    canvasCtx.shadowOffsetX = shadow.offsetX;
    canvasCtx.shadowOffsetY = shadow.offsetY;
    canvasCtx.textBaseline = "top";

    canvasCtx.fillText(this.text, 0, 15);
    this.render(ctx, defaultTextStyle, x, y);
  }
}
