import { Color } from "./color";
import { LinearGradient } from "./gradient";
import { Shadow } from "./shadow";
import { BorderRadius } from "./border";

/**
 * Anything that can be used as background.
 */
export type Background = Color | LinearGradient;

/**
 * A style that can be applied to a widget, if any of this values are not
 * specified they will be driven from the defaults passed to the `Canvas`
 * constructor.
 */
export type ZuiStyle = {
  /**
   * Background of the current widget, default to transparent.
   */
  background?: Background;

  /**
   * The shadow of the widget, default to no-shadow.
   */
  shadow?: Shadow;

  /**
   * Border radius, default to 0,
   */
  borderRadius?: BorderRadius;
};

/**
 * A style that can be applied to a text.
 */
export type ZuiTextStyle = {
  /**
   * The text color.
   */
  color?: Color;

  /**
   * Text shadow.
   */
  shadow?: Shadow;

  /**
   * The text font.
   */
  font?: string;

  /**
   * Font size.
   */
  fontSize?: number;
};

/**
 * Style which can be applied to a line element.
 */
export type ZuiLineStyle = {
  /**
   * Stroke color of the line.
   */
  color?: Color;

  /**
   * Thickness of the line.
   */
  width?: number;

  /**
   * Line's drop shadow.
   */
  shadow?: Shadow;
};
