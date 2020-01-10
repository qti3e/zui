import { Canvas } from "./canvas";
import { ZuiStyle } from "./style";
import { Reactive } from "./reactive";
import { Painter } from "./painter";
import { ZuiKeys, ZuiKeydownEvent } from "./events";
import { ContextMenu } from "./contextMenu";

export abstract class Widget {
  /**
   * The widget style.
   */
  style: ZuiStyle | undefined;

  /**
   * Widget`s parent.
   */
  parent?: Widget | Canvas;

  scale: number | Reactive<number> = 1;

  /**
   * The x offset of the current widget within its parent.
   */
  readonly x = new Reactive<number>(0, this);

  /**
   * The y offset of the current widget within its parent.
   */
  readonly y = new Reactive<number>(0, this);

  /**
   * List of children for this widget so that we render them on the top
   * of this widget.
   */
  readonly children: ReadonlySet<Widget> = new Set();

  /**
   * Add another widget as child of this widget.
   *
   * @param widget Widget which we want to add to the current widget as a child.
   */
  protected addChild(widget: Widget) {
    const currentParent = widget.parent;
    if (currentParent !== this && currentParent !== undefined)
      throw new Error("Widget is already in use.");

    widget.parent = this;
    Set.prototype.add.call(this.children, widget);
  }

  /**
   * Removes the given widget from the children list of the current one.
   *
   * @param widget The widget which we wish to remove from the current element.
   */
  protected removeChild(widget: Widget) {
    const currentParent = widget.parent;
    if (currentParent && currentParent !== this)
      throw new Error(
        "Cannot remove a widget that is not child of the current widget."
      );

    widget.parent = undefined;
    Set.prototype.delete.call(this.children, widget);
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
  handleMouseIn?(keys: ZuiKeys): void;

  /**
   * Handle mouse out.
   */
  handleMouseOut?(keys: ZuiKeys): void;

  handleMouseDown?(x: number, y: number, keys: ZuiKeys): void;

  handleMouseUp?(x: number, y: number, keys: ZuiKeys): void;

  handleMouseMove?(x: number, y: number, keys: ZuiKeys): void;

  /**
   *
   * @param x The x offset within the element.
   * @param y The y offset within the element.
   */
  handleClick?(x: number, y: number, keys: ZuiKeys): void;

  /**
   * The wheel event fires when the user rotates a wheel button on a pointing
   * device (typically a mouse).
   *
   * @param deltaX A double representing the horizontal scroll amount.
   * @param deltaY A double representing the vertical scroll amount.
   */
  handleWheel?(
    deltaX: number,
    deltaY: number,
    x: number,
    y: number,
    keys: ZuiKeys
  ): void;

  /**
   * Handle the keydown event.
   *
   * @param keycode
   * @param key
   * @param keys
   */
  handleKeydown?(keycode: number, key: string, keys: ZuiKeys): void;

  /**
   * Handle the keyup event.
   *
   * @param keycode
   * @param key
   * @param keys
   */
  handleKeyup?(keycode: number, key: string, keys: ZuiKeys): void;

  handleContextMenu?(
    ctx: ContextMenu,
    x: number,
    y: number,
    keys: ZuiKeys
  ): void;
}
