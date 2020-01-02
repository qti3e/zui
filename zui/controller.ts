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

    const ratio = div(containedWidth, MiniMapWidth);
    this.height = div(containedHeight, ratio);

    // Currently this computation adds 21 edges to the DFG, maybe we need to
    // optimize this, by having 4 private reactive variable (width, height,
    // x, y) and update the values on every draw.
    // Another proposal is grouped computations like:
    // const {x, y, width, height} = grouped([...vars we depend on],
    // ([...vars in the same order]) => {
    //     x: ..., (produce a js number)
    //     y: ...,
    // })
    const sr = mul(scale, ratio);
    const width = div(viewWidth, sr);
    const height = div(viewHeight, sr);
    const x = neg(div(offsetX, sr));
    const y = neg(div(offsetY, sr));

    const area = new MiniMapArea(width, height);
    connect(x, area.x);
    connect(y, area.y);

    this.addChild(area);
  }

  draw() {}

  handleClick(x: number, y: number) {
    // TODO(qti3e) Do the bound checking stuff (clicking on the right side of
    // the map will move the offsetX out of the allowed view).
    const nsr =
      (-this.scale.valueOf() * this.containedWidth.valueOf()) / MiniMapWidth;
    this.offsetX.set(nsr * x);
    this.offsetY.set(nsr * y);
  }
}

export class Scaled extends Widget {
  readonly width: number | Reactive<number>;
  readonly height: number | Reactive<number>;

  constructor(
    x: Reactive<number>,
    y: Reactive<number>,
    readonly child: Widget,
    readonly scale: Reactive<number>
  ) {
    super();
    this.width = child.width;
    this.height = child.height;
    connect(scale, this);
    connect(x, child.x);
    connect(y, child.y);
    this.addChild(child);
  }

  draw() {}
}

export class Controller extends Widget {
  private xOffset = new Reactive(0, this);
  private yOffset = new Reactive(0, this);
  private scale = new Reactive(1.5, this);

  constructor(
    readonly width: number | Reactive<number>,
    readonly height: number | Reactive<number>,
    readonly widget: Widget
  ) {
    super();

    this.addChild(
      new Scaled(
        div(this.xOffset, this.scale),
        div(this.yOffset, this.scale),
        widget,
        this.scale
      )
    );

    const miniMap = new MiniMap(
      width,
      height,
      widget.width,
      widget.height,
      this.xOffset,
      this.yOffset,
      this.scale
    );

    connect(sub(this.width, miniMap.width + 20), miniMap.x);
    connect(sub(this.height, add(miniMap.height, 20)), miniMap.y);

    this.addChild(miniMap);
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

    this.xOffset.set(
      Math.max(minX, Math.min(0, this.xOffset.get() - deltaX * scale))
    );
    this.yOffset.set(
      Math.max(minY, Math.min(0, this.yOffset.get() - deltaY * scale))
    );
    // const newS = Math.max(0.1, Math.min(2, scale + deltaY * 0.01));
    // this.scale.set(newS);
  }
}
