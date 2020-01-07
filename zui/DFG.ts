import { ZuiEmitter, ZuiReceiver } from "./types";
import { Widget } from "./widget";
import { Canvas } from "./canvas";
import { Reactive } from "./reactive";

type DFGEdge<T = unknown> = {
  emitter: ZuiEmitter<T>;
  receiver: ZuiReceiver<T> | Widget;
};

const updatedCanvases: Set<Canvas> = new Set();
let DFG: DFGEdge[] = [];

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

  if (emitter instanceof Reactive && receiver instanceof Reactive)
    receiver.set(emitter.get());
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
  const seen = new Set<ZuiEmitter>();

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
        notify(receiver);
      } else {
        for (const d of data) receiver.receive(d, emitter);
      }
    }
  }

  render();
}

/**
 * Notify that a widget has been changed.
 *
 * @param widget The widget that has been changed.
 * @internal
 */
function notify(widget: Widget) {
  const canvas = Canvas.canvasOf(widget);

  // Offscreen widget.
  if (!canvas) return;

  updatedCanvases.add(canvas);
}

/**
 * To render the data into the canvases.
 */
function render() {
  for (const canvas of updatedCanvases) canvas.redraw();
  updatedCanvases.clear();
}

/**
 * Generate a dot graph representing the current state of the entire system, it
 * is used for debugging purposes.
 */
export function toViz(): string {
  let lines: string[] = [
    "digraph zui {",
    "  ratio = fill;",
    "  node [style=filled];"
  ];

  const nodes = new Map<ZuiEmitter | ZuiReceiver | Widget, string>();
  const counter = new Counter<string>();
  const canvases = new Set<Canvas>();
  const getNode = (node: ZuiEmitter | ZuiReceiver | Widget | Canvas) => {
    if (nodes.has(node)) return nodes.get(node)!;

    const constructorName = node.constructor.name;
    const n = counter.get(constructorName);
    const name = `"${constructorName} #${n}"`;
    counter.incr(constructorName);
    nodes.set(node, name);
    return name;
  };

  // Create the widget tree graph.
  lines.push(`  subgraph WidgetTree {`);
  lines.push(`    label = "Widget Tree";`);
  lines.push(`    color = "blue;"`);

  const seenWidgets = new Set<Widget>();
  for (const { receiver: widget } of DFG) {
    if (!(widget instanceof Widget)) continue;
    if (seenWidgets.has(widget)) continue;
    const parent = widget.parent;
    if (!parent) continue;

    const node = getNode(widget);
    const pNode = getNode(parent);
    lines.push(`    ${pNode} -> ${node} [color="pink"];`);
    seenWidgets.add(widget);
  }

  lines.push(`  }`);

  for (const { emitter, receiver } of DFG) {
    const from = getNode(emitter);
    const to = getNode(receiver);
    lines.push("  " + from + " -> " + to + ";");
  }

  for (const { receiver } of DFG) {
    if (receiver instanceof Widget) {
      const node = getNode(receiver);
      lines.push(`  ${node} [color="0.650 0.200 1.000"];`);
    }
  }

  lines.push("}");
  return lines.join("\n");
}

export class Counter<K> {
  private map = new Map<K, number>();

  incr(key: K, n = 1) {
    this.map.set(key, (this.map.get(key) || 0) + n);
  }

  get(key: K): number {
    return this.map.get(key) || 0;
  }

  keys(): IterableIterator<K> {
    return this.map.keys();
  }
}
