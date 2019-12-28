import { BorderRadius } from "./style";

/**
 *
 * @internal
 */
export function rect(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  radius: BorderRadius
) {
  ctx.beginPath();

  if (radius.isZero) {
    ctx.moveTo(0, 0);
    ctx.rect(0, 0, width, height);
    return;
  }

  const PI2 = Math.PI / 2;
  const PI = Math.PI;
  const PI32 = (3 * Math.PI) / 2;
  const { tlw, tlh, trh, trw, blw, blh, brh, brw } = radius;

  // Top Left
  ctx.moveTo(0, tlh);
  ctx.ellipse(tlw, tlh, tlw, tlh, 0, PI, PI32);
  // Top Right
  ctx.lineTo(width - trw, 0);
  ctx.ellipse(width - trw, trh, trw, trh, 0, PI32, 0);
  // Bottom Right
  ctx.lineTo(width, height - brh);
  ctx.ellipse(width - brw, height - brh, brw, brh, 0, 0, PI2);
  // Bottom Left
  ctx.lineTo(blw, height);
  ctx.ellipse(blw, height - blh, blw, blh, 0, PI2, PI);
  // Close
  ctx.lineTo(0, tlh);
}
