const z = require("../dist/zui");
const fs = require("fs");

function *fibIter() {
  let a = 1;
  let b = 1;
  let c;

  while (true) {
    yield c = a + b;
    a = b;
    b = c;
  }
}

function *nIter() {
  let n = 0;

  while (true) {
    yield n++;
  }
}

const fib = z.iterator(fibIter());
const n = z.iterator(nIter());
const sum = z.r(z.add(n, fib));

function render() {
  console.log(+sum)
}

fs.writeFileSync("./graph.dot", z.toViz(), 'utf8');

setInterval(() => {
  render();
  z.handleNextTick()
}, 400);