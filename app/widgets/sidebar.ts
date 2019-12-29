import {
  Widget,
  pageHeight,
  ZuiStyle,
  Color,
  BorderRadius,
  Shadow,
  Icon
} from "../../lib";
import Smiley from "../icons/regular/grin-tongue-wink.svg";

console.log(Smiley);

export class Sidebar extends Widget {
  style: ZuiStyle = {
    background: Color.RGB(0x45, 0x7b, 0x9d),
    borderRadius: BorderRadius.BR(10, 50),
    shadow: new Shadow(3, 0, Color.Grey, 5)
  };

  width = 48;
  height = pageHeight;

  constructor() {
    super();
    this.addChild(0, 0, new Icon(Smiley, Color.RGB(0xff, 0xff, 0xff), 30, 30));
  }

  draw() {}
}
