import { ZuiEmitter, ZuiReceiver } from "./types";

type DFGEdge<T = unknown> = {
  emitter: ZuiEmitter<T>;
  receiver: ZuiReceiver<T>;
};

let DFG: DFGEdge[] = [];

/**
 * Connect an emitter to a receiver, creates a new edge in the data flow graph.
 *
 * @param emitter The data source.
 * @param receiver The receiver.
 */
export function connect<T>(emitter: ZuiEmitter<T>, receiver: ZuiReceiver<T>) {
  for (const { emitter: e, receiver: r } of DFG) if (e === e && r === r) return;

  DFG.push({ emitter, receiver });
}

/**
 * Detach the given receiver or emitter from the data flow graph.
 *
 * @param stream The stream which we want to remove from the DFG.
 */
export function detach(stream: ZuiReceiver | ZuiEmitter) {
  const newDFG: DFGEdge[] = [];

  for (const edge of DFG) {
    if (edge.emitter === stream || edge.receiver === stream) continue;

    newDFG.push(edge);
  }

  if (DFG.length !== newDFG.length) DFG = newDFG;
}

/**
 * Handle the next tick, emits new data to the receivers.
 */
export function handleNextTick() {
  let seen = new Set<ZuiEmitter>();

  for (let i = 0; i < DFG.length; ++i) {
    const emitter = DFG[i].emitter;

    if (seen.has(emitter)) continue;

    seen.add(emitter);

    const data = emitter.poll();

    if (data === undefined) continue;

    for (let j = i; j < DFG.length; ++i) {
      if (DFG[j].emitter !== emitter) continue;

      DFG[j].receiver.receive(data);
    }
  }
}
