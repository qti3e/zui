import { Widget } from "./widget";
import { Reactive } from "./reactive";
import { Painter } from "./painter";
import { div, sub, add, neg, mul } from "./math";
import { ZuiStyle, Shadow, Color } from "./style";
import { connect } from "./DFG";

const MiniMapWidth = 180;

class MiniMapArea extends Widget {
  style: ZuiStyle = {
    background: Color.HEX(0, 0.5)
  };

  constructor(
    readonly width: Reactive<number>,
    readonly height: Reactive<number>
  ) {
    super();
  }

  draw() {}
}

class MiniMap extends Widget {
  readonly width = MiniMapWidth;
  readonly height: Reactive<number>;

  style: ZuiStyle = {
    shadow: new Shadow(-5, -5, Color.HEX(0, 0.5), 5),
    background: Color.HEX(0, 0.3)
  };

  constructor(
    readonly viewWidth: number | Reactive<number>,
    readonly viewHeight: number | Reactive<number>,
    readonly containedWidth: number | Reactive<number>,
    readonly containedHeight: number | Reactive<number>,
    readonly offsetX: Reactive<number>,
    readonly offsetY: Reactive<number>,
    readonly scale: Reactive<number>
  ) {
    super();
    const con = (e: number | Reactive<number>) =>
      e instanceof Reactive ? connect(e, this) : null;
    con(viewWidth);
    con(viewHeight);
    con(containedWidth);
    con(containedHeight);
    connect(offsetX, this);
    connect(offsetY, this);
    connect(scale, this);

    const ratio = div(containedWidth, MiniMapWidth);
    this.height = div(containedHeight, ratio);

    const sr = mul(scale, ratio);
    const width = div(viewWidth, sr);
    const height = div(viewHeight, sr);
    const x = neg(div(offsetX, sr));
    const y = neg(div(offsetY, sr));

    this.addChild(x, y, new MiniMapArea(width, height));
  }

  draw() {}
}

class Scaled extends Widget {
  readonly width: number | Reactive<number>;
  readonly height: number | Reactive<number>;

  constructor(
    readonly x: Reactive<number>,
    readonly y: Reactive<number>,
    readonly child: Widget,
    readonly scale: number | Reactive<number>
  ) {
    super();
    this.width = child.width;
    this.height = child.height;
    if (scale instanceof Reactive) connect(scale, this);
    this.addChild(x, y, child);
  }

  draw(painter: Painter) {
    const scale = this.scale.valueOf();
    (painter as any).backend.scale(scale, scale);
  }
}

export class Controller extends Widget {
  private x = new Reactive(0, this);
  private y = new Reactive(0, this);
  private scale = new Reactive(1.5, this);

  constructor(
    readonly width: number | Reactive<number>,
    readonly height: number | Reactive<number>,
    readonly widget: Widget
  ) {
    super();

    this.addChild(
      0,
      0,
      new Scaled(
        div(this.x, this.scale),
        div(this.y, this.scale),
        widget,
        this.scale
      )
    );

    const miniMap = new MiniMap(
      width,
      height,
      widget.width,
      widget.height,
      this.x,
      this.y,
      this.scale
    );

    this.addChild(
      sub(this.width, miniMap.width + 20),
      sub(this.height, add(miniMap.height, 20)),
      miniMap
    );
  }

  draw() {}

  handleWheel(deltaX: number, deltaY: number) {
    const scale = this.scale.valueOf();
    const wWidth = scale * this.widget.width.valueOf();
    const cWidth = this.width.valueOf();
    const wHeight = scale * this.widget.height.valueOf();
    const cHeight = this.height.valueOf();
    const minX = wWidth > cWidth ? cWidth - wWidth : 0;
    const minY = wHeight > cHeight ? cHeight - wHeight : 0;

    this.x.set(Math.max(minX, Math.min(0, this.x.get() - deltaX * scale)));
    this.y.set(Math.max(minY, Math.min(0, this.y.get() - deltaY * scale)));
  }
}
