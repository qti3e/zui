import * as zui from "../lib";

// ---

function* iter3() {
  let a = 3;
  while (true) {
    yield (a += 3);
  }
}

function* iter5() {
  let a = 5;
  while (true) {
    yield (a += 5);
  }
}

const it3 = zui.iterator(iter3());
const it5 = zui.iterator(iter5());

zui.map(it3, function x(data) {
  console.log(data);
});

zui.map(it5, function y(data) {
  console.log(data);
});

// ---

function render() {
  zui.handleNextTick();
}

setInterval(render, 500);
zui.handleNextTick();
