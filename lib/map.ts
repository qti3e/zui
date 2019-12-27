import { connect } from "./DFG";
import { Queued } from "./queued";
import { ZuiEmitter } from "./types";

type MapCallback<T, U> = (data: T) => U;

/**
 * Transform a data type.
 *
 * @param emitter The data source.
 * @param callback The transformer function.
 */
export function map<T, U>(
  emitter: ZuiEmitter<T>,
  callback: MapCallback<T, U>
): ZuiEmitter<U> {
  const mapHandler = new Map(callback);
  connect(emitter, mapHandler);
  return mapHandler;
}

class Map<T, U> extends Queued<T, U> {
  constructor(readonly callback: MapCallback<T, U>) {
    super();
  }

  receive(data: T) {
    this.enqueue(this.callback(data));
  }
}
