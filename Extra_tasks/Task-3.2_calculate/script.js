const add = (b) => (a) => a + b;

const mul = (b) => (a) => a * b;

const sub = (b) => (a) => a - b;

const div = (b) => (a) => a / b;

const reduced = (f, g) => (arg) => g(f(arg));
const pipe = (...fns) => fns.reduce(reduced);

let a = add(1)(2);
let b = mul(a)(10);
const sub1 = sub(1);
let c = pipe(sub1)(b);
let d = pipe(mul(sub(1)(a)))(c);
console.log(a);
console.log(b);
console.log(c);
console.log(d);

let doSmth = pipe(add(d), sub(c), mul(b), div(a));
let result = doSmth(0);
console.log(result);

let x = pipe(add(1), mul(2))(3);
console.log(x);
