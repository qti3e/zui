import { ReactivePoint2D } from "./types";
import { Canvas } from "./canvas";
import { ZuiStyle } from "./style";
import { Reactive } from "./reactive";
import { Painter } from "./painter";
import { connect } from "./DFG";

/**
 * A widget instance with a position.
 */
export type WidgetPosition = {
  position: ReactivePoint2D;
  widget: Widget;
};

export abstract class Widget {
  /**
   * The widget style.
   */
  style: ZuiStyle | undefined;

  /**
   * Maps every widget to its parent.
   */
  private static readonly parents = new WeakMap<Widget, Widget | Canvas>();

  /**
   * Return parent of a widget.
   *
   * @param widget The widget which we want to find its parent.
   */
  static parentOf(widget: Widget): Widget | Canvas | undefined {
    return this.parents.get(widget);
  }

  /**
   * List of children for this widget so that we render them on the top
   * of this widget.
   */
  readonly children: ReadonlySet<WidgetPosition> = new Set();

  /**
   * Add another widget as child of this widget.
   *
   * @param x The x offset of the widget.
   * @param y The y offset of the widget.
   * @param widget Widget which we want to add to the current widget as a child.
   */
  protected addChild(
    x: number | Reactive<number>,
    y: number | Reactive<number>,
    widget: Widget
  ) {
    const currentParent = Widget.parentOf(widget);
    if (currentParent !== this && currentParent !== undefined)
      throw new Error("Widget is already in use.");

    Widget.parents.set(widget, this);
    Set.prototype.add.call(this.children, { widget, position: { x, y } });

    if (x instanceof Reactive) connect(x, this);
    if (y instanceof Reactive) connect(y, this);
  }

  /**
   * Width of this widget.
   */
  abstract readonly width: number | Reactive<number>;

  /**
   * Height of this widget.
   */
  abstract readonly height: number | Reactive<number>;

  /**
   * Draw the widget.
   */
  abstract draw(ctx: Painter): void;

  /**
   * It will be called after the draw of the current element and all of its
   * children.
   */
  afterDraw?(): void;

  /**
   * Handle mouse in event.
   */
  handleMouseIn?(): void;

  /**
   * Handle mouse out.
   */
  handleMouseOut?(): void;

  handleMouseDown?(x: number, y: number): void;

  handleMouseUp?(x: number, y: number): void;

  handleMouseMove?(x: number, y: number): void;

  /**
   *
   * @param x The x offset within the element.
   * @param y The y offset within the element.
   */
  handleClick?(x: number, y: number): void;

  /**
   * The wheel event fires when the user rotates a wheel button on a pointing
   * device (typically a mouse).
   *
   * @param deltaX A double representing the horizontal scroll amount.
   * @param deltaY A double representing the vertical scroll amount.
   */
  handleWheel?(deltaX: number, deltaY: number): void;
}
