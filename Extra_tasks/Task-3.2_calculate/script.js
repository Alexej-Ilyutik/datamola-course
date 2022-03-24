const add = (a, b) => a + b;

const mul = (a, b) => a * b;

const sub = (b) => (a) => a - b;
const sub1 = sub(1);

const div = (b) => (a) => a / b;

const pipe =
  (...fns) =>
  (val) =>
    fns.reduce((prev, fn) => fn(prev), val);

let a = pipe((x) => add(1, x))(2);
let b = pipe((x) => mul(a, x))(10);
let c = pipe(sub1)(b);
// let d = pipe(mul,sub(a,1))(c);
console.log(a);
console.log(b);
console.log(c);
// console.log(d);
