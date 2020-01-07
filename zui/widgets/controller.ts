import { Widget } from "../widget";
import { Reactive } from "../reactive";
import { div, sub, add, neg, mul, r } from "../math";
import { ZuiStyle } from "../style";
import { connect } from "../DFG";
import { Color } from "../color";
import { Shadow } from "../shadow";

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
    this.height = r(div(containedHeight, ratio), this);

    const sr = mul(scale, ratio);
    const width = r(div(viewWidth, sr), this);
    const height = r(div(viewHeight, sr), this);

    const area = new MiniMapArea(width, height);
    connect(neg(div(offsetX, sr)), area.x);
    connect(neg(div(offsetY, sr)), area.y);

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

class Scaled extends Widget {
  readonly width: number | Reactive<number>;
  readonly height: number | Reactive<number>;

  constructor(readonly child: Widget, readonly scale: Reactive<number>) {
    super();
    this.width = child.width;
    this.height = child.height;
    this.addChild(child);
  }

  draw() {}
}

export class Controller extends Widget {
  private xOffset = new Reactive(0, this);
  private yOffset = new Reactive(0, this);
  private currentScale = new Reactive(1, this);

  constructor(
    readonly width: number | Reactive<number>,
    readonly height: number | Reactive<number>,
    readonly widget: Widget
  ) {
    super();

    const scaled = new Scaled(widget, this.currentScale);
    connect(div(this.xOffset, this.currentScale), scaled.x);
    connect(div(this.yOffset, this.currentScale), scaled.y);
    this.addChild(scaled);

    const miniMap = new MiniMap(
      width,
      height,
      widget.width,
      widget.height,
      this.xOffset,
      this.yOffset,
      this.currentScale
    );

    connect(sub(this.width, miniMap.width + 20), miniMap.x);
    connect(sub(this.height, add(miniMap.height, 20)), miniMap.y);

    this.addChild(miniMap);
  }

  draw() {}

  handleWheel(deltaX: number, deltaY: number) {
    const scale = this.currentScale.valueOf();
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
