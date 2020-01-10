import {
  Color,
  Shadow,
  ZuiStyle,
  ZuiTextStyle,
  Colors,
  BorderRadius,
  ZuiLineStyle
} from "../zui";

export const background1 = Color.HEX(0x03045e);
export const foreground1 = Color.HEX(0xffffff);

export const background2 = Color.HEX(0x0077b6);
export const foreground2 = Color.HEX(0xffffff);

export const background3 = Color.HEX(0x00b4db);
export const foreground3 = Color.HEX(0xffffff);

export const background4 = Color.HEX(0xf9f9f9);
export const foreground4 = Color.HEX(0x210124);

export const shadow1Vert = new Shadow(3, 0, Color.HEX(0, 0.8), 5);
export const shadow1Hor = new Shadow(0, 3, Color.HEX(0, 0.8), 5);

export const shadow2 = new Shadow(3, 3, Color.HEX(0, 0.8), 10);

export const shadow3 = new Shadow(2, 2, Color.HEX(0, 0.8), 2);

export const defaultZuiStyle: Required<ZuiStyle> = {
  background: background4,
  shadow: Shadow.NoShadow,
  borderRadius: BorderRadius.All(0)
};

export const defaultZuiTextStyle: Required<ZuiTextStyle> = {
  color: foreground4,
  shadow: Shadow.NoShadow,
  font: "Raleway",
  fontSize: 12
};

export const defaultZuiLineStyle: Required<ZuiLineStyle> = {
  shadow: shadow3,
  color: background1,
  width: 3
};
