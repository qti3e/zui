import { ZuiEmitter, ZuiReceiver } from "./types";
import { Widget } from "./widget";
import { Canvas } from "./canvas";

type DFGEdge<T = unknown> = {
  emitter: ZuiEmitter<T>;
  receiver: ZuiReceiver<T> | Widget;
};

let DFG: DFGEdge[] = [];

(window as any)["zuiDFG"] = DFG;

/**
 * Connect an emitter to a widget, it will make the widget be redrawn every time
 * emitter emits a new data.
 *
 * @param emitter The data source.
 * @param widget Widget that is connected to this element.
 */
export function connect(emitter: ZuiEmitter, widget: Widget): void;

/**
 * Connect an emitter to a receiver, creates a new edge in the data flow graph.
 *
 * @param emitter The data source.
 * @param receiver The receiver.
 */
export function connect<T>(
  emitter: ZuiEmitter<T>,
  receiver: ZuiReceiver<T>
): void;

// Connect implementation.
export function connect(emitter: ZuiEmitter, receiver: ZuiReceiver | Widget) {
  for (const { emitter: e, receiver: r } of DFG)
    if (e === emitter && r === receiver) return;

  DFG.push({ emitter, receiver });
}

/**
 * Detach the given receiver/emitter or widget from the data flow graph.
 *
 * @param node The DFG node which we want to be removed from the graph.
 */
export function detach(node: ZuiReceiver | ZuiEmitter | Widget) {
  const newDFG: DFGEdge[] = [];

  for (const edge of DFG) {
    if (edge.emitter === node || edge.receiver === node) continue;

    newDFG.push(edge);
  }

  if (DFG.length !== newDFG.length) DFG = newDFG;
}

/**
 * Handle the next tick, emits new data to the receivers.
 */
export function handleNextTick() {
  const changedWidgets = new Set<Widget>();
  const changedCanvases = new Set<Canvas>();
  let seen = new Set<ZuiEmitter>();

  for (let i = 0; i < DFG.length; ++i) {
    const emitter = DFG[i].emitter;

    if (seen.has(emitter)) continue;
    seen.add(emitter);

    const data: unknown[] = [];

    let tmp = emitter.poll();
    while (tmp !== undefined && data.length < emitter.maxPerFrame) {
      data.push(tmp);
      tmp = emitter.poll();
    }

    if (data.length === 0) continue;

    for (let j = i; j < DFG.length; ++j) {
      if (DFG[j].emitter !== emitter) continue;
      const receiver = DFG[j].receiver;
      if (receiver instanceof Widget) {
        changedWidgets.add(receiver);
      } else {
        for (const d of data) receiver.receive(d);
      }
    }
  }

  for (const widget of changedWidgets) {
    const canvas = Canvas.canvasOf(widget);
    if (canvas) changedCanvases.add(canvas);
  }

  for (const canvas of changedCanvases) canvas.redraw();
}
