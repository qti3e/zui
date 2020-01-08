import {
  Widget,
  sub,
  pageWidth,
  pageHeight,
  ZuiStyle,
  Color,
  BorderRadius,
  Shadow,
  Controller,
  Draggable,
  NodeEditor,
  Reactive,
  add,
  NodeEditorNode,
  r,
  NodeDirection,
  Colors
} from "../../../zui";

export class TypeNode extends Widget {
  width = 300;
  height = 50;
  style: ZuiStyle = {
    background: Color.HEX(0x222831),
    borderRadius: BorderRadius.All(10).add(BorderRadius.BR(20)),
    shadow: new Shadow(2, 2, Color.HEX(0x000, 0.5), 5)
  };

  constructor(
    readonly v: number = 0,
    private d: Draggable,
    private ne: NodeEditor
  ) {
    super();

    const out = new NodeEditorNode(
      ne,
      this,
      this,
      "out",
      NodeDirection.Right,
      10,
      {
        background: Color.HEX(0, 0.3)
      }
    );

    out.y.set(15);
    out.x.set(270);
    this.addChild(out);

    const inputNode = new NodeEditorNode(
      ne,
      this,
      this,
      "in",
      NodeDirection.Left,
      10,
      Colors.purple
    );
    inputNode.y.set(15);
    inputNode.x.set(20);
    this.addChild(inputNode);
  }

  draw() {
    //console.log("D", this.v)
  }

  handleMouseDown(x: number, y: number) {
    this.d.start(this, x, y);
  }

  handleMouseUp() {
    this.d.stop(this);
  }
}

export class TypesEditorView extends Widget {
  width = 5000;
  height = 3000;
  draggable = new Draggable();
  nodeEditor = new NodeEditor(this);

  constructor() {
    super();
    const addChild = (x: number, y: number, v: number) => {
      const w = new TypeNode(v, this.draggable, this.nodeEditor);
      w.x.set(x);
      w.y.set(y);

      this.addChild(w);
    };

    this.addChild(this.nodeEditor);

    for (let i = 0; i < 30; ++i) {
      const x = (Math.random() * 4700) | 0;
      const y = (Math.random() * 2950) | 0;
      addChild(x, y, i);
    }
  }

  draw() {}

  handleMouseMove(x: number, y: number) {
    this.draggable.handleMouseMove(x, y);
  }
}

export class TypesEditor extends Widget {
  width = r(sub(pageWidth, 48), this);
  height = pageHeight;

  constructor() {
    super();
    this.addChild(
      new Controller(this.width, this.height, new TypesEditorView())
    );
  }

  draw() {}
}
