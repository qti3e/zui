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
  ) {
    const cache = this.cache.get(defaultTextStyle);
    if (cache) {
      ctx.drawImage(cache, x, y - 15);
      return;
    }

    const canvas = document.createElement("canvas");
    const canvasCtx = canvas.getContext("2d")!;
    this.cache.set(defaultTextStyle, canvas);

    const shadow = this.style?.shadow || defaultTextStyle.shadow;
    const font = this.style?.font || defaultTextStyle.font;
    const fontSize = this.style?.fontSize || defaultTextStyle.fontSize;
    canvasCtx.font = `${fontSize}px ${font}`;

    const size = canvasCtx.measureText(this.text);
    const sizeM = canvasCtx.measureText("M");
    canvas.width = size.width;
    canvas.height = sizeM.width * 1.75 + 15;

    // Again.
    canvasCtx.font = `${fontSize}px ${font}`;
    canvasCtx.fillStyle = (
      this.style?.color || defaultTextStyle.color
    ).toString();
    canvasCtx.shadowBlur = shadow.blur;
    canvasCtx.shadowColor = shadow.color.toString();
    canvasCtx.shadowOffsetX = shadow.offsetX;
    canvasCtx.shadowOffsetY = shadow.offsetY;
    canvasCtx.textBaseline = "top";

    canvasCtx.fillText(this.text, 0, 15);
    this.render(ctx, defaultTextStyle, x, y);
    document.body.appendChild(canvas);
  }
}
