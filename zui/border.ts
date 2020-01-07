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
