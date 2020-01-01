import { Widget, sub, pageWidth, pageHeight, ZuiStyle, Color, BorderRadius, Shadow, Controller } from "../../../zui";

export class TypeNode extends Widget {
  width = 300;
  height = 50;
  style: ZuiStyle = {
    background: Color.HEX(0x222831),
    borderRadius: BorderRadius.All(10).add(BorderRadius.BR(20)),
    shadow: new Shadow(2, 2, Color.HEX(0x000, 0.5), 5)
  }

  draw() { }

  handleClick() {}
}

export class TypesEditorView extends Widget {
  width = 5000;
  height = 3000;

  constructor() {
    super();
    this.addChild(0, 0, new TypeNode());
    this.addChild(200, 100, new TypeNode());
    this.addChild(2500, 100, new TypeNode());
    this.addChild(4700, 100, new TypeNode());
    this.addChild(4700, 2950, new TypeNode());
  }

  draw() { }

}

export class TypesEditor extends Widget{
  width = sub(pageWidth, 48, this);
  height = pageHeight;

  constructor() {
    super();
    this.addChild(0, 0, new Controller(this.width, this.height, new TypesEditorView()));
  }

  draw() {}
}