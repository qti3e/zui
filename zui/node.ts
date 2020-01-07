import { Widget } from "./widget";
import { Reactive } from "./reactive";
import { Painter } from "./painter";
import { ZuiStyle } from "./style";
import { add } from "./math";

// A node editor.

interface Node<T> {
  data: T;
  x: Reactive<number>;
  y: Reactive<number>;
}

export class NodeEditorNode<T> extends Widget {
  readonly width: number;
  readonly height: number;
  private X: Reactive<number>;
  private Y: Reactive<number>;

  constructor(
    readonly editor: NodeEditor<T>,
    readonly container: Widget,
    readonly data: T,
    readonly mode: "in" | "out",
    readonly style: ZuiStyle | undefined = undefined,
    readonly radius: number = 10
  ) {
    super();
    this.width = radius * 2;
    this.height = radius * 2;
    this.X = add(container.x, add(this.x, radius));
    this.Y = add(container.y, add(this.y, radius));
  }

  handleMouseDown() {
    if (this.mode === "out") {
      this.editor.start(this.data, this.X, this.Y);
    } else {
      this.editor.accept(this.data, this.X, this.Y);
    }
  }

  draw() {}
}

export class NodeEditor<T = unknown> extends Widget {
  readonly width: number | Reactive<number>;
  readonly height: number | Reactive<number>;
  readonly edges: [Node<T>, Node<T>][] = [];
  private current: Node<T> | undefined;

  private updated = new Reactive<number>(0, this);
  private mouseX = new Reactive<number>(0, this);
  private mouseY = new Reactive<number>(0, this);

  constructor(readonly widget: Widget) {
    super();
    this.width = widget.width;
    this.height = widget.height;
  }

  start(data: T, x: Reactive<number>, y: Reactive<number>) {
    this.current = { data, x, y };
    this.mouseX.set(x.valueOf());
    this.mouseY.set(y.valueOf());
    this.updated.set(Math.random());
  }

  accept(data: T, x: Reactive<number>, y: Reactive<number>) {
    if (!this.current) return;
    const node = { data, x, y };
    this.edges.push([this.current, node]);
    this.current = undefined;
    this.updated.set(Math.random());
  }

  handleMouseMove(x: number, y: number) {
    if (!this.current) return;
    this.mouseX.set(x);
    this.mouseY.set(y);
  }

  handleMouseDown() {
    this.current = undefined;
    this.updated.set(Math.random());
  }

  draw(painter: Painter) {
    for (const [from, to] of this.edges) {
      const fromX = from.x.valueOf();
      const fromY = from.y.valueOf();
      const toX = to.x.valueOf();
      const toY = to.y.valueOf();
      painter.bezierAB(fromX, fromY, toX, toY);
    }

    if (this.current) {
      const fromX = this.current.x.valueOf();
      const fromY = this.current.y.valueOf();
      const toX = this.mouseX.valueOf();
      const toY = this.mouseY.valueOf();
      painter.bezierAB(fromX, fromY, toX, toY);
    }
  }
}
