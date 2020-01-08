import { Point2D } from "./types";

/**
 * A whole bunch of functions to draw smooth lines.
 */

/**
 * o------o
 */
export function drawHorizontalLine(
  ctx: Path2D | CanvasRenderingContext2D,
  y: number,
  x0: number,
  x1: number
): void {
  ctx.moveTo(x0, y);
  ctx.lineTo(x1, y);
}

/**
 * o
 * |
 * o
 */
export function drawVerticalLine(
  ctx: Path2D | CanvasRenderingContext2D,
  x: number,
  y0: number,
  y1: number
): void {
  ctx.moveTo(x, y0);
  ctx.lineTo(x, y1);
}

/*
 * o          o
 * |          |
 * |          |
 * +---+  +---+
 *     |  |
 *     |  |
 *     o  o
 */
export function drawVerticalRLine(
  ctx: Path2D | CanvasRenderingContext2D,
  x0: number,
  y0: number,
  x1: number,
  y1: number
): void {
  if (x0 === x1) return drawVerticalLine(ctx, x0, y0, y1);
  if (y1 < y0) return drawVerticalRLine(ctx, x1, y1, x0, y0);
  const radius = 5;
  const yMid = y0 + (y1 - y0) / 2;
  const neg = x0 < x1 ? 1 : -1;
  ctx.moveTo(x0, y0);
  ctx.lineTo(x0, yMid - radius);
  ctx.arcTo(x0, yMid, x0 + neg * radius, yMid, radius);
  ctx.lineTo(x1 - neg * radius, yMid);
  ctx.arcTo(x1, yMid, x1, yMid + radius, radius);
  ctx.lineTo(x1, y1);
}

/*
 * o-------+
 *         |
 *         |       +-----o
 *         +-----o |
 *                 |
 *         o-------+
 */
export function drawHorizontalRLine(
  ctx: Path2D | CanvasRenderingContext2D,
  x0: number,
  y0: number,
  x1: number,
  y1: number
): void {
  if (y0 === y1) return drawHorizontalLine(ctx, y0, x0, x1);
  if (x1 < x0) return drawHorizontalRLine(ctx, x1, y1, x0, y0);
  const radius = 5;
  const xMid = x0 + (x1 - x0) / 2;
  const neg = y0 < y1 ? 1 : -1;
  ctx.moveTo(x0, y0);
  ctx.lineTo(xMid - radius, y0);
  ctx.arcTo(xMid, y0, xMid, y0 + neg * radius, radius);
  ctx.lineTo(xMid, y1 - neg * radius);
  ctx.arcTo(xMid, y1, xMid + radius, y1, radius);
  ctx.lineTo(x1, y1);
}

/*
 * o            o
 * |            |
 * |            |
 * +---o    o---+
 */
export function drawCornerDownLine(
  ctx: Path2D | CanvasRenderingContext2D,
  x0: number,
  y0: number,
  x1: number,
  y1: number
): void {
  if (x0 === x1) return drawVerticalLine(ctx, x0, y0, y1);
  if (y1 < y0) return drawCornerDownLine(ctx, x1, y1, x0, y0);
  const radius = 5;
  const neg = x0 < x1 ? 1 : -1;
  ctx.moveTo(x0, y0);
  ctx.lineTo(x0, y1 - radius);
  ctx.arcTo(x0, y1, x0 + neg * radius, y1, radius);
  ctx.lineTo(x1, y1);
}

/*
 * o---+    +---o
 *     |    |
 *     |    |
 *     o    o
 */
export function drawCornerTopLine(
  ctx: Path2D | CanvasRenderingContext2D,
  x0: number,
  y0: number,
  x1: number,
  y1: number
): void {
  if (x0 === x1) return drawVerticalLine(ctx, x0, y0, y1);
  if (y1 < y0) return drawCornerTopLine(ctx, x1, y1, x0, y0);
  const radius = 5;
  const neg = x0 < x1 ? 1 : -1;
  ctx.moveTo(x0, y0);
  ctx.lineTo(x1 - neg * radius, y0);
  ctx.arcTo(x1, y0, x1, y0 + radius, radius);
  ctx.lineTo(x1, y1);
}

/*
 *      -o  o-
 *     /      \
 *    /        \
 *   /          \
 * o-            -o
 */
export function drawRightLeftLine(
  ctx: Path2D | CanvasRenderingContext2D,
  x0: number,
  y0: number,
  x1: number,
  y1: number
): void {
  if (y0 === y1) return drawHorizontalLine(ctx, y1, x1, x0);
  const radius = 55;
  const neg = -1;
  ctx.moveTo(x1, y1);
  ctx.lineTo(x1 + neg * radius, y1);
  ctx.lineTo(x0 - neg * radius, y0);
  ctx.lineTo(x0, y0);
}

export function drawLeftRightLine(
  ctx: Path2D | CanvasRenderingContext2D,
  x0: number,
  y0: number,
  x1: number,
  y1: number
) {
  if (y0 === y1) return drawHorizontalLine(ctx, y1, x1, x0);
  const radius = 55;
  const neg = 1;
  ctx.moveTo(x1, y1);
  ctx.lineTo(x1 + neg * radius, y1);
  ctx.lineTo(x0 - neg * radius, y0);
  ctx.lineTo(x0, y0);
}

/**
 *  +-----+           +-----+
 *  |     |           |     |
 *  o     |           |     o
 *        |     o o   |
 *        |     | |   |
 *        +-----+ +---+
 */
export function drawTopDownLine(
  ctx: Path2D | CanvasRenderingContext2D,
  x0: number,
  y0: number,
  x1: number,
  y1: number
): void {
  const radius = 5;
  const xMid = x1 + (x0 - x1) / 2;
  const neg = x0 < x1 ? -1 : 1;
  ctx.moveTo(x0, y0);
  ctx.lineTo(x0, y0 + 30 - radius);
  ctx.arcTo(x0, y0 + 30, x0 - neg * radius, y0 + 30, radius);
  ctx.lineTo(xMid + neg * radius, y0 + 30);
  ctx.arcTo(xMid, y0 + 30, xMid, y0 + 30 - radius, radius);
  ctx.lineTo(xMid, y1 - 30 + radius);
  ctx.arcTo(xMid, y1 - 30, xMid - neg * radius, y1 - 30, radius);
  ctx.lineTo(x1 + neg * radius, y1 - 30);
  ctx.arcTo(x1, y1 - 30, x1, y1 - 30 + radius, radius);
  ctx.lineTo(x1, y1);
}

/**
 * +--+
 * |  |
 * |  o
 * |
 * |  o
 * |  |
 * +--+
 */
export function drawClaspLeft(
  ctx: Path2D | CanvasRenderingContext2D,
  x0: number,
  y0: number,
  x1: number,
  y1: number,
  width = 100,
  d = 30
): void {
  const radius = 5;
  const xMid = -Math.abs(width) - d;
  ctx.moveTo(x0, y0);
  ctx.lineTo(x0, y0 + d - radius);
  ctx.arcTo(x0, y0 + d, x0 - radius, y0 + d, radius);
  ctx.lineTo(xMid + radius, y0 + d);
  ctx.arcTo(xMid, y0 + d, xMid, y0 + d - radius, radius);
  ctx.lineTo(xMid, y1 - d + radius);
  ctx.arcTo(xMid, y1 - d, xMid + radius, y1 - d, radius);
  ctx.lineTo(x1 - radius, y1 - d);
  ctx.arcTo(x1, y1 - d, x1, y1 - d + radius, radius);
  ctx.lineTo(x1, y1);
}

export interface Line {
  type:
    | "straight"
    | "verticalR"
    | "horizontalR"
    | "cornerDown"
    | "cornerTop"
    | "rightLeft"
    | "leftRight"
    | "topDown"
    | "claspLeft";
  from: Point2D;
  to: Point2D;
}
