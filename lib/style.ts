export class Color {
  private constructor(
    readonly r: number,
    readonly g: number,
    readonly b: number,
    readonly a: number
  ) {}

  static RGB(r: number, g: number, b: number) {
    return new Color(r, g, b, 1);
  }

  static RGBA(r: number, g: number, b: number, a: number) {
    return new Color(r, g, b, a);
  }

  static Transparent = new Color(0, 0, 0, 0);

  static Black = new Color(0, 0, 0, 1);

  static White = new Color(0xff, 0xff, 0xff, 1);

  static Grey = new Color(0x41, 0x41, 0x41, 1);

  toString() {
    return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
  }
}
