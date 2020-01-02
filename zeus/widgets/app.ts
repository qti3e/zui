import {
  Widget,
  pageWidth,
  pageHeight,
  ZuiStyle,
  Color,
  connect
} from "../../zui";
import { Sidebar } from "./sidebar";
import { TypesEditor, TypesEditorView } from "../pages/types/main";

export class App extends Widget {
  width = pageWidth;
  height = pageHeight;
  style: ZuiStyle = {
    background: Color.RGB(0x39, 0x3e, 0x46)
  };

  constructor() {
    super();

    // Listen for changes on the emitter.
    connect(this.width, this);
    connect(this.height, this);

    // Add children.

    const typesEditor = new TypesEditor();
    typesEditor.x.set(48);
    this.addChild(typesEditor);

    this.addChild(new Sidebar());
  }

  draw() {}
}

function p(x: number, y: number) {
  return { x, y };
}
