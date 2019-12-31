import { connect } from "./DFG";
import { ZuiEmitter, ZuiReceiver } from "./types";

type IterateCallback<T> = (data: T) => void;

/**
 * Create an iterator over data emitted from the emitter.
 *
 * @param emitter The data source.
 * @param callback The callback function.
 */
export function iterate<T>(
  emitter: ZuiEmitter<T>,
  callback: IterateCallback<T>
): ZuiReceiver<T> {
  const iterateHandler = new Iterate(callback);
  connect(emitter, iterateHandler);
  return iterateHandler;
}

/**
 * @internal
 */
class Iterate<T> implements ZuiReceiver<T> {
  constructor(readonly callback: IterateCallback<T>) {}

  receive(data: T) {
    this.callback(data);
  }
}
