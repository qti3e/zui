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
  NodeEditorNode
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

    const out = new NodeEditorNode(ne, this, this, "out", {
      background: Color.HEX(0, 0.3),
      borderRadius: BorderRadius.All(10)
    });

    out.y.set(15);
    out.x.set(270);
    this.addChild(out);

    const inputNode = new NodeEditorNode(ne, this, this, "in", {
      background: Color.HEX(0x00ff00, 0.3),
      borderRadius: BorderRadius.All(10)
    });
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

    addChild(0, 0, 0);
    addChild(200, 100, 1);
    addChild(2500, 100, 2);
    addChild(4700, 100, 3);
    addChild(4700, 2950, 4);

    addChild(200, 400, 5);
    addChild(400, 100, 6);
    addChild(400, 600, 6);
  }

  draw() {}

  handleMouseMove(x: number, y: number) {
    this.draggable.handleMouseMove(x, y);
  }
}

export class TypesEditor extends Widget {
  width = sub(pageWidth, 48, this);
  height = pageHeight;

  constructor() {
    super();
    this.addChild(
      new Controller(this.width, this.height, new TypesEditorView())
    );
  }

  draw() {}
}
