/**
 * A color value.
 */
export class Color {
  /**
   * Constructs a new color.
   *
   * @param red Value of the red channel.
   * @param green Value of the green channel.
   * @param blue Value of the blue channel.
   * @param alpha Value of the alpha channel.
   */
  private constructor(
    readonly red: number,
    readonly green: number,
    readonly blue: number,
    readonly alpha: number
  ) {}

  /**
   * Constructs a new color from the given RGB values, the alpha will be set
   * to 1.
   *
   * @param r Value of the red channel.
   * @param g Value of the green channel.
   * @param b Value of the blue channel.
   */
  static RGB(r: number, g: number, b: number) {
    return new Color(r, g, b, 1);
  }

  /**
   * Constructs a new color from the given RGBA values.
   *
   * @param r Value of the red channel.
   * @param g Value of the green channel.
   * @param b Value of the blue channel.
   * @param a Value of the alpha channel.
   */
  static RGBA(r: number, g: number, b: number, a: number) {
    return new Color(r, g, b, a);
  }

  /**
   * A full transparent color.
   */
  static Transparent = new Color(0, 0, 0, 0);

  /**
   * Black color.
   */
  static Black = new Color(0, 0, 0, 1);

  /**
   * White color.
   */
  static White = new Color(0xff, 0xff, 0xff, 1);

  /**
   * Default grey.
   */
  static Grey = new Color(0x41, 0x41, 0x41, 1);

  /**
   * Return a `rgba(r, g, b, a)` style string indicating the current color.
   */
  toString() {
    return `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`;
  }
}

/**
 * A linear gradient stop, that is a tuple of form `[stop, color]` where
 * `stop` is a number ranging from 0 to 1 and `color` is the color in that
 * place.
 */
export type LinearGradientStop = [number, Color];

/**
 * A linear gradient.
 */
export class LinearGradient {
  /**
   * Stops in this linear gradient.
   */
  readonly stops: LinearGradientStop[];

  /**
   * Constructs a new Linear Gradient object.
   *
   * @param deg Degree of the gradient.
   * @param stops Linear gradient stops.
   */
  constructor(readonly deg: number, ...stops: LinearGradientStop[]) {
    this.stops = stops.slice();
  }
}

/**
 * Anything that can be used as background.
 */
export type Background = Color | LinearGradientStop;

/**
 * A shadow style value.
 */
export class Shadow {
  /**
   * Constructs a new shadow.
   *
   * @param offsetX Specifies the distance that shadow will be offset horizontally.
   * @param offsetY Specifies the distance that shadow will be offset vertically.
   * @param color Specifies the color of shadow.
   * @param blur Specifies the amount of blur applied to shadow. The default is 0 (no blur).
   */
  constructor(
    readonly offsetX: number,
    readonly offsetY: number,
    readonly color: Color,
    readonly blur: number = 0
  ) {}

  /**
   * Specifies no shadow.
   */
  static NoShadow = new Shadow(0, 0, Color.Transparent, 0);
}

/**
 * A border radius used for clipping, it supports both circular and elliptical
 * corners.
 */
export class BorderRadius {
  /**
   * Only true when all of the corners are set to zero.
   */
  readonly isZero: boolean;

  private constructor(
    /**
     * Top Left Width.
     */
    readonly tlw: number,
    /**
     * Top Left Height.
     */
    readonly tlh: number,
    /**
     * Top Right Width.
     */
    readonly trw: number,
    /**
     * Top Right Height.
     */
    readonly trh: number,
    /**
     * Bottom Right Width.
     */
    readonly brw: number,
    /**
     * Bottom Right Height.
     */
    readonly brh: number,
    /**
     * Bottom Left Width.
     */
    readonly blw: number,
    /**
     * Bottom Left Height.
     */
    readonly blh: number
  ) {
    this.isZero =
      tlw === 0 &&
      tlh === 0 &&
      trw === 0 &&
      trh === 0 &&
      brw === 0 &&
      brh === 0 &&
      blw === 0 &&
      blh === 0;
  }

  /**
   * Creates a border radius for all corners.
   *
   * @param width Width of the ellipse used to draw the corners.
   * @param height Height of the ellipse used to draw the corners, this
   *  argument is optional and it is default to the first argument (width).
   */
  static All(width: number, height: number = width) {
    return new BorderRadius(
      width,
      height,
      width,
      height,
      width,
      height,
      width,
      height
    );
  }

  /**
   * Creates a border radius for the Top Left corner.
   *
   * @param width Width of the ellipse used to draw the corners.
   * @param height Height of the ellipse used to draw the corners, this
   *  argument is optional and it is default to the first argument (width).
   */
  static TL(width: number, height: number = width) {
    return new BorderRadius(width, height, 0, 0, 0, 0, 0, 0);
  }

  /**
   * Creates a border radius for the Top Right corner.
   *
   * @param width Width of the ellipse used to draw the corners.
   * @param height Height of the ellipse used to draw the corners, this
   *  argument is optional and it is default to the first argument (width).
   */
  static TR(width: number, height: number = width) {
    return new BorderRadius(0, 0, width, height, 0, 0, 0, 0);
  }

  /**
   * Creates a border radius for the Bottom Right corner.
   *
   * @param width Width of the ellipse used to draw the corners.
   * @param height Height of the ellipse used to draw the corners, this
   *  argument is optional and it is default to the first argument (width).
   */
  static BR(width: number, height: number = width) {
    return new BorderRadius(0, 0, 0, 0, width, height, 0, 0);
  }

  /**
   * Creates a border radius for the Bottom Left corner.
   *
   * @param width Width of the ellipse used to draw the corners.
   * @param height Height of the ellipse used to draw the corners, this
   *  argument is optional and it is default to the first argument (width).
   */
  static BL(width: number, height: number = width) {
    return new BorderRadius(0, 0, 0, 0, 0, 0, width, height);
  }

  /**
   * Creates a border radius for the Top Left/Bottom Right corner.
   *
   * @param width Width of the ellipse used to draw the corners.
   * @param height Height of the ellipse used to draw the corners, this
   *  argument is optional and it is default to the first argument (width).
   */
  static TLBR(width: number, height: number = width) {
    return new BorderRadius(width, height, 0, 0, width, height, 0, 0);
  }

  /**
   * Creates a border radius for the Top Right/Bottom Left corner.
   *
   * @param width Width of the ellipse used to draw the corners.
   * @param height Height of the ellipse used to draw the corners, this
   *  argument is optional and it is default to the first argument (width).
   */
  static TRBL(width: number, height: number = width) {
    return new BorderRadius(0, 0, width, height, 0, 0, width, height);
  }

  /**
   * Sum the current border-radius with the given one, returns the new
   * border.
   *
   * @param border The operand.
   */
  add(border: BorderRadius) {
    return new BorderRadius(
      this.tlw + border.tlw,
      this.tlh + border.tlh,
      this.trw + border.trw,
      this.trh + border.trh,
      this.brw + border.brw,
      this.brh + border.brh,
      this.blw + border.blw,
      this.blh + border.blh
    );
  }

  /**
   * Subtract the current border-radius from the given one, returns the new
   * border.
   *
   * @param border The operand.
   */
  sub(border: BorderRadius) {
    return new BorderRadius(
      this.tlw - border.tlw,
      this.tlh - border.tlh,
      this.trw - border.trw,
      this.trh - border.trh,
      this.brw - border.brw,
      this.brh - border.brh,
      this.blw - border.blw,
      this.blh - border.blh
    );
  }

  /**
   * Zero border radius.
   */
  static NoRadius = BorderRadius.All(0);
}

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
