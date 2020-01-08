import { Widget } from "../widget";
import { Reactive } from "../reactive";
import { Painter } from "../painter";
import { ZuiStyle } from "../style";
import { add, r } from "../math";
import { Line } from "../lines";

// A node editor.

export enum NodeDirection {
  Left,
  Right,
  Top,
  Bottom
}

interface Node<T> {
  data: T;
  x: Reactive<number>;
  y: Reactive<number>;
  direction: NodeDirection;
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
    readonly direction: NodeDirection,
    readonly style: ZuiStyle | undefined = undefined,
    readonly radius: number = 10
  ) {
    super();
    this.width = radius * 2;
    this.height = radius * 2;
    this.X = r(add(container.x, add(this.x, radius)), this);
    this.Y = r(add(container.y, add(this.y, radius)), this);
  }

  handleMouseDown() {
    if (this.mode === "out") {
      this.editor.start(this.data, this.X, this.Y, this.direction);
    } else {
      this.editor.accept(this.data, this.X, this.Y, this.direction);
    }
  }

  draw() {}

  static connect<T>(from: NodeEditorNode<T>, to: NodeEditorNode<T>) {
    if (from.editor !== to.editor) throw new Error("Both nodes must be in the same node editor.");
    if (from.mode !== "out") throw new Error("Expected an output node.");
    if (to.mode !== "in") throw new Error("Expected an input node.");
    from.editor.start(from.data, from.X, from.Y, from.direction);
    to.editor.accept(to.data, to.X, to.Y, to.direction);
  }
}

export class NodeEditor<T = unknown> extends Widget {
  readonly width: number | Reactive<number>;
  readonly height: number | Reactive<number>;
  readonly edges: [Node<T>, Node<T>][] = [];
  private current: Node<T> | undefined;

  private updated = new Reactive<number>(0, this);
  private mouseX = new Reactive<number>(0, this);
  private mouseY = new Reactive<number>(0, this);
  private mouseToNode: Node<undefined> | undefined;

  constructor(readonly widget: Widget) {
    super();
    this.width = widget.width;
    this.height = widget.height;
  }

  getGraph(): [T, T][] {
    const result: [T, T][] = [];
    for (const [from, to] of this.edges)
      result.push([from.data, to.data]);
    return result;
  }

  start(
    data: T,
    x: Reactive<number>,
    y: Reactive<number>,
    direction: NodeDirection
  ) {
    this.current = { data, x, y, direction };
    this.mouseX.set(x.valueOf());
    this.mouseY.set(y.valueOf());
    this.updated.set(Math.random());
    const toDirection = {
      [NodeDirection.Left]: NodeDirection.Right,
      [NodeDirection.Right]: NodeDirection.Left,
      [NodeDirection.Top]: NodeDirection.Bottom,
      [NodeDirection.Bottom]: NodeDirection.Top
    }[this.current.direction];
    this.mouseToNode = {
      data: undefined,
      x: this.mouseX,
      y: this.mouseY,
      direction: toDirection
    };
  }

  accept(
    data: T,
    x: Reactive<number>,
    y: Reactive<number>,
    direction: NodeDirection
  ) {
    if (!this.current) return;
    const node = { data, x, y, direction };
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
    this.mouseToNode = undefined;
    this.updated.set(Math.random());
  }

  drawEdge(painter: Painter, from: Node<T>, to: Node<T | undefined>) {
    const line: Line = {
      type: "straight",
      from: { x: from.x.valueOf(), y: from.y.valueOf() },
      to: { x: to.x.valueOf(), y: to.y.valueOf() }
    };

    if (
      from.direction === NodeDirection.Right &&
      to.direction === NodeDirection.Left
    )
      line.type = "rightLeft";

    if (
      from.direction === NodeDirection.Left &&
      to.direction === NodeDirection.Right
    )
      line.type = "leftRight";

    if (
      from.direction === NodeDirection.Top &&
      to.direction === NodeDirection.Bottom
    )
      line.type = "claspLeft";

    if (
      (from.direction === NodeDirection.Left ||
        from.direction === NodeDirection.Right) &&
      to.direction === NodeDirection.Top
    )
      line.type = "cornerTop";

    if (
      from.direction === NodeDirection.Bottom &&
      (to.direction === NodeDirection.Right ||
        to.direction === NodeDirection.Left)
    )
      line.type = "cornerDown";

    painter.line(line);
  }

  draw(painter: Painter) {
    for (const [from, to] of this.edges) this.drawEdge(painter, from, to);

    if (this.current && this.mouseToNode)
      this.drawEdge(painter, this.current, this.mouseToNode);
  }
}
