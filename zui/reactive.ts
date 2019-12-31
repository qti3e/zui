import { ZuiEmitter, ZuiReceiver } from "./types";
import { Widget } from "./widget";
import { connect } from "./DFG";

export class Reactive<T> implements ZuiEmitter<T>, ZuiReceiver<T> {
  maxPerFrame = 1;

  private value: T;

  private changed = false;

  constructor(init: T, widget?: Widget) {
    this.value = init;
    if (widget) connect(this, widget);
  }

  poll() {
    if (!this.changed) return;
    this.changed = false;
    return this.value;
  }

  set(newValue: T) {
    if (this.value === newValue) return;
    this.changed = true;
    this.value = newValue;
  }

  get(): T {
    return this.value;
  }

  valueOf() {
    return this.value;
  }

  receive(value: T) {
    this.set(value);
  }
}
