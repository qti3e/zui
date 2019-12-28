import { ZuiEmitter } from "./types";
import { Queued } from "./queued";
import { handleNextTick } from "./DFG";

type EventEmitter = {
  addEventListener: (name: string, cb: (e: any) => void) => void;
};

type EventCacheRecord<K extends keyof GlobalEventHandlersEventMap> = {
  event: K;
  handler: EventHandler<GlobalEventHandlersEventMap[K]>;
};

const eventsCache = new WeakMap<EventEmitter, EventCacheRecord<any>[]>();

/**
 * Returns a new ZuiEmitter that emits `event` events fired by the target
 * element.
 *
 * @param event Name of the event we want to listen to, example: `click`.
 * @param element The target element.
 */
export function event<K extends keyof GlobalEventHandlersEventMap>(
  event: K,
  element: EventEmitter
): ZuiEmitter<GlobalEventHandlersEventMap[K]> {
  const cache = eventsCache.get(element) || [];

  // Try cache.
  for (const { event: e, handler } of cache) if (e === event) return handler;

  // Create a new handler.
  const handler = new EventHandler<GlobalEventHandlersEventMap[K]>();

  element.addEventListener(event, data => {
    handler.receive(data);
  });

  // Cache the result and return.
  cache.push({ event, handler });
  eventsCache.set(element, cache);
  return handler;
}

class EventHandler<T> extends Queued<T, T> {
  receive(event: T) {
    this.enqueue(event);
  }
}
