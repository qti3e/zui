import { Widget } from "./widget";
import { ZuiReceiver, Point2D, BoundingBox } from "./types";
import { ZuiStyle, ZuiTextStyle, ZuiLineStyle } from "./style";
import { rect } from "./rect";
import { Painter } from "./painter";
import {
  ZuiResizeEvent,
  ZuiMouseMoveEvent,
  ZuiClickEvent,
  ZuiWheelEvent,
  CanvasEvent,
  ZuiMouseDownEvent,
  ZuiMouseUpEvent
} from "./events";
import { Colors } from "./colors";
import { Shadow } from "./shadow";
import { BorderRadius } from "./border";

type RenderedWidgetData = {
  clip?: Path2D;
  boundingBox: BoundingBox;
  scale: number;
};

// The default style.
const defaultStyle: Required<ZuiStyle> = Object.freeze({
  background: Colors.transparent,
  shadow: Shadow.NoShadow,
  borderRadius: BorderRadius.NoRadius
});

// The default text style.
const defaultTextStyle: Required<ZuiTextStyle> = Object.freeze({
  color: Colors.black,
  shadow: Shadow.NoShadow,
  font: "Arial",
  fontSize: 12
});

const defaultLineStyle: Required<ZuiLineStyle> = Object.freeze({
  color: Colors.red,
  width: 3,
  shadow: Shadow.NoShadow
});

export type CanvasOptions = {
  alpha?: boolean;
  style?: ZuiStyle;
  textStyle?: ZuiTextStyle;
  lineStyle?: ZuiLineStyle;
};

/**
 * The canvas.
 */
export class Canvas implements ZuiReceiver<CanvasEvent> {
  /**
   * The widgets in this element.
   */
  private children: Widget[] = [];

  /**
   * The DOM Canvas element.
   */
  readonly domElement: HTMLCanvasElement;

  /**
   * The Context2D of the DOM canvas.
   */
  readonly context: CanvasRenderingContext2D;

  /**
   * The canvas global style.
   */
  readonly style: Readonly<Required<ZuiStyle>>;

  /**
   * The default text style.
   */
  readonly defaultTextStyle: Readonly<Required<ZuiTextStyle>>;

  /**
   * The default line style.
   */
  readonly defaultLineStyle: Readonly<Required<ZuiLineStyle>>;

  /**
   * Last absolute position and size of every child in the current canvas.
   */
  private widgetsData = new WeakMap<Widget, RenderedWidgetData>();

  /**
   * Current translate x.
   */
  private translateX = 0;

  /**
   * Current translate y.
   */
  private translateY = 0;

  /**
   * Current scale.
   */
  private scale = 1;

  /**
   * Previous intersecting widgets that had either handleMouseIn or
   * handleMouseOut.
   */
  private mouseInOut: Widget[] = [];

  /**
   * Cache widgets to canvases.
   */
  private static widgetsToCanvasMap = new WeakMap<Widget, Canvas>();

  /**
   * Find the canvas which owns the given widget.
   *
   * @param widget The widget which we wish to find to find its container canvas.
   */
  static canvasOf(widget: Widget): Canvas | undefined {
    const parentCache = Canvas.widgetsToCanvasMap.get(widget);
    if (parentCache) return parentCache;
    let current: Widget | Canvas | undefined = widget;
    while (current && !(current instanceof Canvas)) current = current.parent;
    if (!current) return;
    Canvas.widgetsToCanvasMap.set(widget, current);
    return current;
  }

  /**
   *
   * @param x The x offset of the screen.
   * @param y The y offset of the screen.
   * @param widget The widget we want to add to that offset.
   */
  addWidget(x: number, y: number, widget: Widget) {
    this.children.push(widget);
    this.redraw();
  }

  constructor(
    private width: number,
    private height: number,
    options?: CanvasOptions
  ) {
    this.domElement = document.createElement("canvas");
    this.context = this.domElement.getContext("2d", {
      alpha: options && options.alpha
    })!;
    this.domElement.width = width;
    this.domElement.height = height;
    // Apply options.
    this.style = { ...defaultStyle, ...(options && options.style) };
    this.defaultTextStyle = {
      ...defaultTextStyle,
      ...(options && options.textStyle)
    };
    this.defaultLineStyle = {
      ...defaultLineStyle,
      ...(options && options.lineStyle)
    };
  }

  private findIntersectingWidgetsWithEvent(
    position: Point2D,
    event: (
      | "handleMouseIn"
      | "handleMouseOut"
      | "handleClick"
      | "handleWheel"
      | "handleMouseDown"
      | "handleMouseUp"
      | "handleMouseMove"
    )[]
  ): Widget[] {
    if (event.length < 1 || event.length > 4)
      throw new Error("Unexpected argument passed.");

    const isInBoundingBox = (box: BoundingBox) =>
      position.x >= box.left &&
      position.x <= box.right &&
      position.y >= box.top &&
      position.y <= box.bottom;

    const result: Widget[] = [];

    const toSee = this.children.slice();
    for (const widget of toSee) {
      const data = this.widgetsData.get(widget);
      if (data && isInBoundingBox(data.boundingBox)) {
        toSee.push(...widget.children);
        if (
          (event[0] && widget[event[0]]) ||
          (event[1] && widget[event[1]]) ||
          (event[2] && widget[event[2]]) ||
          (event[3] && widget[event[3]])
        )
          result.push(widget);
      }
    }

    return result;
  }

  private getCordsWithInWidget(cord: Point2D, widget: Widget): Point2D {
    const data = this.widgetsData.get(widget)!;
    const box = data.boundingBox;
    const x = (cord.x - box.left) / data.scale;
    const y = (cord.y - box.top) / data.scale;
    return { x, y };
  }

  receive(event: CanvasEvent) {
    if (event instanceof ZuiResizeEvent) {
      this.width = event.width;
      this.height = event.height;
      this.redraw();
    }

    if (event instanceof ZuiMouseMoveEvent) {
      const widgets = this.findIntersectingWidgetsWithEvent(event, [
        "handleMouseIn",
        "handleMouseOut",
        "handleClick",
        "handleMouseMove"
      ]);

      // Fire mouse out event. (this.mouseInOut is the previous result of
      // widgets.)
      for (const x of this.mouseInOut)
        if (x.handleMouseOut && widgets.indexOf(x) < 0) x.handleMouseOut();

      // Fire mouseIn & mouseMove event.
      let clickable = false;
      for (const widget of widgets) {
        if (widget.handleMouseIn && this.mouseInOut.indexOf(widget) < 0) {
          widget.handleMouseIn();
        }

        if (widget.handleMouseMove) {
          const { x, y } = this.getCordsWithInWidget(event, widget);
          widget.handleMouseMove!(x, y);
        }

        if (!clickable && widget.handleClick) clickable = true;
      }

      const style = this.domElement.style;
      const cursor = clickable ? "pointer" : "default";
      if (style.cursor !== cursor) style.cursor = cursor;
      // Store the current result as previous.
      this.mouseInOut = widgets;
    }

    if (event instanceof ZuiClickEvent) {
      const widgets = this.findIntersectingWidgetsWithEvent(event, [
        "handleClick"
      ]);

      if (widgets.length) {
        const widget = widgets[widgets.length - 1];
        const { x, y } = this.getCordsWithInWidget(event, widget);
        widget.handleClick!(x, y);
      }
    }

    if (event instanceof ZuiWheelEvent) {
      const widgets = this.findIntersectingWidgetsWithEvent(event, [
        "handleWheel"
      ]);

      if (widgets.length) {
        const widget = widgets[widgets.length - 1];
        const scale = this.widgetsData.get(widget)!.scale;
        const deltaX = event.deltaX * scale;
        const deltaY = event.deltaY * scale;
        widget.handleWheel!(deltaX, deltaY);
      }
    }

    if (event instanceof ZuiMouseDownEvent) {
      const widgets = this.findIntersectingWidgetsWithEvent(event, [
        "handleMouseDown"
      ]);

      if (widgets.length) {
        const widget = widgets[widgets.length - 1];
        const { x, y } = this.getCordsWithInWidget(event, widget);
        widget.handleMouseDown!(x, y);
      }
    }

    if (event instanceof ZuiMouseUpEvent) {
      const widgets = this.findIntersectingWidgetsWithEvent(event, [
        "handleMouseUp"
      ]);

      if (widgets.length) {
        const widget = widgets[widgets.length - 1];
        const { x, y } = this.getCordsWithInWidget(event, widget);
        widget.handleMouseUp!(x, y);
      }
    }
  }

  redraw() {
    this.domElement.width = this.width;
    this.domElement.height = this.height;

    this.context.fillStyle = this.style.background.toString();
    this.context.fillRect(0, 0, this.width, this.height);

    const viewport: BoundingBox = {
      left: 0,
      right: this.width,
      top: 0,
      bottom: this.height
    };

    for (const child of this.children) {
      const x = child.x.valueOf();
      const y = child.y.valueOf();
      this.draw({ x, y }, child, viewport);
    }
  }

  private getStyle<K extends keyof ZuiStyle>(
    widget: Widget,
    key: K
  ): NonNullable<ZuiStyle[K]> {
    if (!widget.style) return this.style[key]!;

    if (widget.style[key]) return widget.style[key]!;

    return this.style[key]!;
  }

  private draw(position: Point2D, widget: Widget, box: BoundingBox) {
    const scale = this.scale;
    const width = widget.width.valueOf(); // The actual width - not scaled.
    const height = widget.height.valueOf(); // The actual height - not scaled.
    const left = this.translateX + scale * position.x;
    const top = this.translateY + scale * position.y;
    const boundingBox = {
      left: left,
      right: left + scale * width,
      top: top,
      bottom: top + scale * height
    };

    // Store this.
    Canvas.widgetsToCanvasMap.set(widget, this);

    // Check if bounding box is in the viewport.
    const viewLeft = box.left;
    const viewRight = box.right;
    const viewTop = box.top;
    const viewBottom = box.bottom;

    if (
      boundingBox.left > viewRight ||
      boundingBox.right < viewLeft ||
      boundingBox.top > viewBottom ||
      boundingBox.bottom < viewTop
    ) {
      // Save the data of this widget.
      this.widgetsData.set(widget, { boundingBox, scale });
      return;
    }

    // Start drawing.
    const { context } = this;
    context.save();
    context.translate(position.x, position.y);

    this.translateX += scale * position.x;
    this.translateY += scale * position.y;

    // Get the styles.
    const shadow = this.getStyle(widget, "shadow");
    const radius = this.getStyle(widget, "borderRadius");

    // Construct the clip.
    const clip = new Path2D();
    rect(clip, width, height, radius);

    // Save the data of this widget.
    this.widgetsData.set(widget, {
      boundingBox,
      clip: radius.isZero ? undefined : clip,
      scale
    });

    // 0. Container & Background
    context.shadowColor = shadow.color.toString();
    context.shadowBlur = shadow.blur;
    context.shadowOffsetX = shadow.offsetX;
    context.shadowOffsetY = shadow.offsetY;
    context.fillStyle = this.getStyle(widget, "background").toString();
    context.fill(clip);

    // 1. Clip
    context.clip(clip);

    // 2. Draw element.
    widget.draw(
      new Painter(
        context,
        this.translateX,
        this.translateY,
        this.defaultTextStyle
      )
    );

    const currentElementScale = widget.scale.valueOf();
    this.scale *= currentElementScale;
    context.scale(currentElementScale, currentElementScale);

    // 3. Draw children.
    // Compute the viewport.
    const childBox: BoundingBox = {
      left: left > viewLeft ? left : viewLeft, // max
      right: boundingBox.right < viewRight ? boundingBox.right : viewRight, // min
      top: top > viewTop ? top : viewTop, // max
      bottom: boundingBox.bottom < viewBottom ? boundingBox.bottom : viewBottom // min
    };

    for (const child of widget.children) {
      const x = child.x.valueOf();
      const y = child.y.valueOf();
      this.draw({ x, y }, child, childBox);
    }

    // 4. Restore the previous context.
    context.restore();
    this.scale /= currentElementScale;
    this.translateX -= scale * position.x;
    this.translateY -= scale * position.y;

    // Call afterDraw.
    if (widget.afterDraw) widget.afterDraw();
  }
}
