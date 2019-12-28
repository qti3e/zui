import { ZuiEmitter, ZuiReceiver } from "./types";

/**
 * @internal
 */
export abstract class Queued<I, O> implements ZuiEmitter<O>, ZuiReceiver<I> {
  private queue: O[] = [];

  protected enqueue(data: O) {
    this.queue.push(data);
  }

  poll(): O | undefined {
    return this.queue.shift();
  }

  abstract receive(data: I): void;
}
