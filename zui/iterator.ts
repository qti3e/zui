import { ZuiEmitter } from "./types";

/**
 * Creates an emitter from an iterator, note that it does not emit the return
 * value of the iterator.
 *
 * @param iter The iterator that is going to be converted into a ZuiEmitter.
 */
export function iterator<T>(iter: Iterator<T>): ZuiEmitter<T> {
  return new IteratorHandler(iter);
}

/**
 * @internal
 */
class IteratorHandler<T> implements ZuiEmitter<T> {
  readonly maxPerFrame = 1;

  private done = false;

  constructor(readonly iter: Iterator<T>) {}

  poll() {
    if (this.done) return undefined;

    const data = this.iter.next();

    if (data.done) {
      this.done = true;
      return undefined;
    }

    return data.value;
  }
}
