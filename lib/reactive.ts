import { ZuiEmitter } from "./types";

export class Reactive<T> implements ZuiEmitter<T> {
  maxPerFrame = 1;

  private value: T;

  private changed = false;

  constructor(init: T) {
    this.value = init;
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
}
