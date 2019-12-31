import { connect } from "./DFG";
import { Queued } from "./queued";
import { ZuiEmitter } from "./types";

/**
 * A filter that selects elements of the same type from the input stream.
 */
type FilterFunction<T> = (data: T) => boolean;

/**
 * A filter that selects a specific type of data.
 */
type FilterNarrowFunction<T, U extends T> = (data: T) => data is U;

export function filter<T, U extends T>(
  emitter: ZuiEmitter<T>,
  filterFn: FilterNarrowFunction<T, U>
): ZuiEmitter<U>;

/**
 * Filter the data emitted by the emitter that meet the conditions specified by
 * the filterFn.
 *
 * @param emitter The data source.
 * @param filterFn A function that takes one argument and returns a boolean.
 */
export function filter<T>(
  emitter: ZuiEmitter<T>,
  filterFn: FilterFunction<T>
): ZuiEmitter<T> {
  const filterHandler = new Filter<T>(filterFn);
  connect(emitter, filterHandler);
  return filterHandler;
}

/**
 * @internal
 */
class Filter<T> extends Queued<T, T> {
  constructor(private readonly callback: FilterFunction<T>) {
    super();
  }

  receive(data: T) {
    if (this.callback(data)) this.enqueue(data);
  }
}
