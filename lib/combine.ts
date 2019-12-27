import { Queued } from "./queued";
import { connect } from "./DFG";
import { ZuiEmitter } from "./types";

export function combine<A>(e1: ZuiEmitter<A>): ZuiEmitter<A>;

export function combine<A, B>(
  e1: ZuiEmitter<A>,
  e2: ZuiEmitter<B>
): ZuiEmitter<A | B>;

export function combine<A, B, C>(
  e1: ZuiEmitter<A>,
  e2: ZuiEmitter<B>,
  e3: ZuiEmitter<C>
): ZuiEmitter<A | B | C>;

export function combine<A, B, C, D>(
  e1: ZuiEmitter<A>,
  e2: ZuiEmitter<B>,
  e3: ZuiEmitter<C>,
  e4: ZuiEmitter<D>
): ZuiEmitter<A | B | C | D>;

export function combine<A, B, C, D, E>(
  e1: ZuiEmitter<A>,
  e2: ZuiEmitter<B>,
  e3: ZuiEmitter<C>,
  e4: ZuiEmitter<D>,
  e5: ZuiEmitter<E>
): ZuiEmitter<A | B | C | D | E>;

export function combine<A, B, C, D, E, F>(
  e1: ZuiEmitter<A>,
  e2: ZuiEmitter<B>,
  e3: ZuiEmitter<C>,
  e4: ZuiEmitter<D>,
  e5: ZuiEmitter<E>,
  e6: ZuiEmitter<F>
): ZuiEmitter<A | B | C | D | E | F>;

export function combine<A, B, C, D, E, F, G>(
  e1: ZuiEmitter<A>,
  e2: ZuiEmitter<B>,
  e3: ZuiEmitter<C>,
  e4: ZuiEmitter<D>,
  e5: ZuiEmitter<E>,
  e6: ZuiEmitter<F>,
  e7: ZuiEmitter<G>
): ZuiEmitter<A | B | C | D | E | F | G>;

export function combine<A, B, C, D, E, F, G, H>(
  e1: ZuiEmitter<A>,
  e2: ZuiEmitter<B>,
  e3: ZuiEmitter<C>,
  e4: ZuiEmitter<D>,
  e5: ZuiEmitter<E>,
  e6: ZuiEmitter<F>,
  e7: ZuiEmitter<G>,
  e8: ZuiEmitter<H>
): ZuiEmitter<A | B | C | D | E | F | G | H>;

export function combine<A, B, C, D, E, F, G, H, I>(
  e1: ZuiEmitter<A>,
  e2: ZuiEmitter<B>,
  e3: ZuiEmitter<C>,
  e4: ZuiEmitter<D>,
  e5: ZuiEmitter<E>,
  e6: ZuiEmitter<F>,
  e7: ZuiEmitter<G>,
  e8: ZuiEmitter<H>,
  e9: ZuiEmitter<I>
): ZuiEmitter<A | B | C | D | E | F | G | H | I>;

export function combine<A, B, C, D, E, F, G, H, I, J>(
  e1: ZuiEmitter<A>,
  e2: ZuiEmitter<B>,
  e3: ZuiEmitter<C>,
  e4: ZuiEmitter<D>,
  e5: ZuiEmitter<E>,
  e6: ZuiEmitter<F>,
  e7: ZuiEmitter<G>,
  e8: ZuiEmitter<H>,
  e9: ZuiEmitter<I>,
  ea: ZuiEmitter<J>
): ZuiEmitter<A | B | C | D | E | F | G | H | I | J>;

export function combine(...emitters: ZuiEmitter[]) {
  const combineHandler = new Combine();
  for (const emitter of emitters) connect(emitter, combineHandler);
  return combineHandler;
}

class Combine extends Queued<unknown, unknown> {
  receive(data: unknown) {
    this.enqueue(data);
  }
}
