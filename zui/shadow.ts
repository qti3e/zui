import { Color } from "./color";
import { Colors } from "./colors";

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
  static NoShadow = new Shadow(0, 0, Colors.transparent, 0);
}
