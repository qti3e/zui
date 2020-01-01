import { ZuiEmitter } from "./types";
import { Reactive } from "./reactive";
import { iterate } from "./iterate";
import { Widget } from "./widget";
import { connect } from "./DFG";

type ZuiNumber = number | ZuiEmitter<number>;

function getValue(n: ZuiNumber) {
  if (typeof n === "number") return n;
  if (n instanceof Reactive) return n.get();
  return NaN;
}

export function neg(a: ZuiEmitter<number>, widget?: Widget): Reactive<number> {
  const value = new Reactive(-getValue(a));
  iterate(a, v => value.set(-v));
  if (widget) connect(value, widget);
  return value;
}

export function add(
  a: ZuiNumber,
  b: ZuiNumber,
  widget?: Widget
): Reactive<number> {
  let x: number, y: number;
  const value = new Reactive((x = getValue(a)) + (y = getValue(b)));
  if (typeof a !== "number") iterate(a, v => value.set((x = v) + y));
  if (typeof b !== "number") iterate(b, v => value.set(x + (y = v)));
  if (widget) connect(value, widget);
  return value;
}

export function sub(
  a: ZuiNumber,
  b: ZuiNumber,
  widget?: Widget
): Reactive<number> {
  let x: number, y: number;
  const value = new Reactive((x = getValue(a)) - (y = getValue(b)));
  if (typeof a !== "number") iterate(a, v => value.set((x = v) - y));
  if (typeof b !== "number") iterate(b, v => value.set(x - (y = v)));
  if (widget) connect(value, widget);
  return value;
}

export function mul(
  a: ZuiNumber,
  b: ZuiNumber,
  widget?: Widget
): Reactive<number> {
  let x: number, y: number;
  const value = new Reactive((x = getValue(a)) * (y = getValue(b)));
  if (typeof a !== "number") iterate(a, v => value.set((x = v) * y));
  if (typeof b !== "number") iterate(b, v => value.set(x * (y = v)));
  if (widget) connect(value, widget);
  return value;
}

export function div(
  a: ZuiNumber,
  b: ZuiNumber,
  widget?: Widget
): Reactive<number> {
  let x: number, y: number;
  const value = new Reactive((x = getValue(a)) / (y = getValue(b)));
  if (typeof a !== "number") iterate(a, v => value.set((x = v) / y));
  if (typeof b !== "number") iterate(b, v => value.set(x / (y = v)));
  if (widget) connect(value, widget);
  return value;
}

export function pow(
  a: ZuiNumber,
  b: ZuiNumber,
  widget?: Widget
): Reactive<number> {
  let x: number, y: number;
  const value = new Reactive((x = getValue(a)) ** (y = getValue(b)));
  if (typeof a !== "number") iterate(a, v => value.set((x = v) ** y));
  if (typeof b !== "number") iterate(b, v => value.set(x ** (y = v)));
  if (widget) connect(value, widget);
  return value;
}

export function max(
  a: ZuiNumber,
  b: ZuiNumber,
  widget?: Widget
): Reactive<number> {
  let x: number, y: number;
  const value = new Reactive(Math.max((x = getValue(a)), (y = getValue(b))));
  if (typeof a !== "number") iterate(a, v => value.set(Math.max((x = v), y)));
  if (typeof b !== "number") iterate(b, v => value.set(Math.max(x, (y = v))));
  if (widget) connect(value, widget);
  return value;
}

export function min(
  a: ZuiNumber,
  b: ZuiNumber,
  widget?: Widget
): Reactive<number> {
  let x: number, y: number;
  const value = new Reactive(Math.min((x = getValue(a)), (y = getValue(b))));
  if (typeof a !== "number") iterate(a, v => value.set(Math.min((x = v), y)));
  if (typeof b !== "number") iterate(b, v => value.set(Math.min(x, (y = v))));
  if (widget) connect(value, widget);
  return value;
}
