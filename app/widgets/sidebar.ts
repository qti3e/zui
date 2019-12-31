import {
  Widget,
  pageWidth,
  ZuiStyle,
  Color,
  Shadow,
  Reactive,
  Painter
} from "../../lib";
import Smiley from "../icons/regular/grin-tongue-wink.svg";
import Smiley2 from "../icons/regular/grin-hearts.svg";

import grin from "../icons/grin-hearts.svg";

class SidebarButton extends Widget {
  private readonly updater = new Reactive(0, this);

  style: ZuiStyle = {
    background: Color.Transparent
  };

  width = 48;
  height = 48;

  constructor() {
    super();
  }

  draw(painter: Painter) {
    painter.drawZuiPath(9, 9, grin, 30 / 512, 1);
  }

  handleMouseIn() {
    this.style.background = Color.RGBA(0xfd, 0x70, 0x14, 0.7);
    this.updater.set(Math.random());
  }

  handleMouseOut() {
    this.style.background = Color.Transparent;
    this.updater.set(Math.random());
  }
}

export class Sidebar extends Widget {
  style: ZuiStyle = {
    background: Color.RGB(0x22, 0x28, 0x31),
    shadow: new Shadow(3, 0, Color.RGBA(0x22, 0x28, 0x31, 0.5), 5)
  };

  width = 48;

  height = pageWidth;

  constructor() {
    super();
    this.addChild(0, 0, new SidebarButton());
    this.addChild(0, 48, new SidebarButton());
  }

  draw(painter: Painter) {}
}
