import { Widget } from "./widget";
import { Reactive } from "./reactive";
import { Color } from "./style";

export class Icon extends Widget {
  private image: HTMLImageElement;
  private readonly loaded = new Reactive(false, this);
  private loading = false;
  private data?: ImageData;

  constructor(
    readonly url: string,
    readonly color: Color,
    readonly width: number = 30,
    readonly height: number = 30
  ) {
    super();

    this.image = new Image(width, height);
    this.image.onload = () => {
      this.createImage();
    };
  }

  draw(ctx: CanvasRenderingContext2D) {
    if (this.data) {
      this.drawImage(ctx);
    } else {
      this.getImage();
    }
  }

  getImage() {
    if (this.loading) return;

    this.image.src = this.url;
    this.loading = true;
  }

  createImage() {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d")!;
    canvas.width = this.width;
    canvas.height = this.height;
    context.drawImage(this.image, 0, 0, this.width, this.height);
    const imageData = context.getImageData(0, 0, this.width, this.height);
    this.data = imageData;
    this.loaded.set(true);
  }

  drawImage(ctx: CanvasRenderingContext2D) {
    const originalImageData = ctx.getImageData(0, 0, this.width, this.height);

    const { red, green, blue, alpha } = this.color;

    const { data } = this.data!;
    const { data: oData } = originalImageData;

    for (let i = 0; i < data.length; i += 4) {
      const a = data[i + 3] / 255;
      if (a === 0) continue;
      oData[i + 0] = (1 - a) * oData[i + 0] + a * alpha * red;
      oData[i + 1] = (1 - a) * oData[i + 1] + a * alpha * green;
      oData[i + 2] = (1 - a) * oData[i + 2] + a * alpha * blue;
    }

    ctx.putImageData(originalImageData, 0, 0);
  }
}
