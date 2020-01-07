import { ZuiReceiver, ZuiEmitter } from "./types";
import { Reactive } from "./reactive";
import { map } from "./map";
import { connect } from "./DFG";
import { Widget } from "./widget";

type ZuiNumber = number | ZuiEmitter<number>;

type ComputeCallback = (lhs: number, rhs: number) => number;

export class ZuiBinaryComputationUnit
  implements ZuiReceiver<number>, ZuiEmitter<number> {
  maxPerFrame = 1;
  private lhsValue: number = NaN;
  private rhsValue: number = NaN;
  private value: number;
  private changed = true;

  constructor(
    readonly compute: ComputeCallback,
    readonly lhs: ZuiNumber,
    readonly rhs: ZuiNumber
  ) {
    if (typeof lhs === "number") {
      this.lhsValue = lhs;
    } else {
      if (lhs instanceof Reactive) this.lhsValue = lhs.get();
      else if (lhs instanceof ZuiBinaryComputationUnit)
        this.lhsValue = lhs.current();
      connect(lhs, this);
    }

    if (typeof rhs === "number") {
      this.rhsValue = rhs;
    } else {
      if (rhs instanceof Reactive) this.rhsValue = rhs.get();
      else if (rhs instanceof ZuiBinaryComputationUnit)
        this.rhsValue = rhs.current();
      connect(rhs, this);
    }

    this.value = compute(this.lhsValue, this.rhsValue);
  }

  receive(data: number, source: ZuiEmitter<number>) {
    if (source === this.lhs) this.lhsValue = data;
    if (source === this.rhs) this.rhsValue = data;
    const value = this.compute(this.lhsValue, this.rhsValue);
    if (value === this.value) return;
    this.changed = true;
    this.value = value;
  }

  poll() {
    if (!this.changed) return undefined;
    this.changed = false;
    return this.value;
  }

  current() {
    return this.value;
  }
}

export function add(lhs: ZuiNumber, rhs: ZuiNumber): ZuiEmitter<number> {
  return new ZuiBinaryComputationUnit(
    (l: number, r: number) => l + r,
    lhs,
    rhs
  );
}

export function sub(lhs: ZuiNumber, rhs: ZuiNumber): ZuiEmitter<number> {
  return new ZuiBinaryComputationUnit(
    (l: number, r: number) => l - r,
    lhs,
    rhs
  );
}

export function mul(lhs: ZuiNumber, rhs: ZuiNumber): ZuiEmitter<number> {
  return new ZuiBinaryComputationUnit(
    (l: number, r: number) => l * r,
    lhs,
    rhs
  );
}

export function div(lhs: ZuiNumber, rhs: ZuiNumber): ZuiEmitter<number> {
  return new ZuiBinaryComputationUnit(
    (l: number, r: number) => l / r,
    lhs,
    rhs
  );
}

export function pow(lhs: ZuiNumber, rhs: ZuiNumber): ZuiEmitter<number> {
  return new ZuiBinaryComputationUnit(
    (l: number, r: number) => l ** r,
    lhs,
    rhs
  );
}

export function max(lhs: ZuiNumber, rhs: ZuiNumber): ZuiEmitter<number> {
  return new ZuiBinaryComputationUnit(
    (l: number, r: number) => (l > r ? l : r),
    lhs,
    rhs
  );
}

export function min(lhs: ZuiNumber, rhs: ZuiNumber): ZuiEmitter<number> {
  return new ZuiBinaryComputationUnit(
    (l: number, r: number) => (l < r ? l : r),
    lhs,
    rhs
  );
}

export function neg(number: ZuiEmitter<number>): ZuiEmitter<number> {
  return map(number, n => -n);
}

export function r(emitter: ZuiEmitter<number>, widget?: Widget) {
  if (emitter instanceof Reactive) {
    if (widget) connect(emitter, widget);
    return emitter;
  }
  const value =
    emitter instanceof ZuiBinaryComputationUnit ? emitter.current() : NaN;
  const reactive = new Reactive(value, widget);
  connect(emitter, reactive);
  return reactive;
}
