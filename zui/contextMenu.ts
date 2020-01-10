import { Widget } from "./widget";
import { Text } from "./text";
import { Stack } from "./widgets/stack";
import { Painter } from "./painter";
import { pageHeight, pageWidth } from "./dimension";
import { ZuiStyle } from "./style";
import { Colors } from "./colors";
import { Shadow } from "./shadow";
import { BorderRadius } from "./border";

class Item extends Widget {
  readonly width = 200;
  readonly height = 30;

  constructor(readonly text: Text, readonly handler: () => void) {
    super();
  }

  handleClick() {
    this.handler();
  }

  draw(painter: Painter) {
    painter.drawText(10, 5, this.text);
  }
}

class ContextMenu extends Stack {
  constructor() {
    super(200, 2);
  }

  addMenuItem(text: Text, handler: () => void) {
    this.addItem(new Item(text, handler));
  }

  clear() {}
}

export interface ContextMenuItem {}

export type ContextMenuItemsGroup = ContextMenuItem[];

export class ContextMenuHandler extends Widget {
  readonly width = pageWidth;
  readonly height = pageHeight;

  style: ZuiStyle = {
    background: Colors.transparent,
    shadow: Shadow.NoShadow,
    borderRadius: BorderRadius.All(0)
  };

  show(x: number, y: number, items: ContextMenuItemsGroup[]) {}

  hide() {}

  clear() {}

  draw() {}
}
