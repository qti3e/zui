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
   * Returns the color from a 0xrrggbb number. (0xrgb is not supported.)
   * @param hex The hex number representing the color as a 6-digit hex number.
   */
  static HEX(hex: number, opacity = 1) {
    const r = hex >> 16;
    const g = (hex >> 8) & 0xff;
    const b = hex & 0xff;
    return new Color(r, g, b, opacity);
  }

  /**
   * Return a `rgba(r, g, b, a)` style string indicating the current color.
   */
  toString() {
    return `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`;
  }
}
