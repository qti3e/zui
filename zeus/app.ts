import * as z from "../zui";
import { background1, shadow1Vert, background2, foreground1 } from "./style";
import { TypesEditor } from "./pages/types/main";

class SidebarButton extends z.Widget {
  readonly width = 48;
  readonly height = 48;
  readonly hovered = new z.Reactive(false, this);
  readonly icon = new z.Text("H", {
    color: foreground1,
    fontSize: 30
  });
  readonly style: z.ZuiStyle = {
    background: background1
  };

  constructor() {
    super();
  }

  draw(painter: z.Painter) {
    painter.drawText(0, 0, this.icon);
  }

  handleMouseIn() {
    this.style.background = background2;
    this.hovered.set(true);
  }

  handleMouseOut() {
    this.style.background = background1;
    this.hovered.set(false);
  }

  handleClick() {}
}

class Sidebar extends z.Widget {
  readonly height = z.pageHeight;
  readonly width = 48;
  readonly style: z.ZuiStyle = {
    background: background1,
    shadow: shadow1Vert
  };

  constructor() {
    super();

    const stack = new z.Stack(48, 5);
    this.addChild(stack);
    stack.y.set(5);

    stack.addItem(new SidebarButton());
    stack.addItem(new SidebarButton());
    stack.addItem(new SidebarButton());

    console.log(stack);
  }

  draw() {}
}

export class App extends z.Widget {
  readonly width = z.pageWidth;
  readonly height = z.pageHeight;
  readonly sidebar = new Sidebar();

  constructor() {
    super();

    this.addChild(this.sidebar);

    const typesPage = new TypesEditor();
    typesPage.x.set(48);
    this.addChild(typesPage);
  }

  draw() {}
}
