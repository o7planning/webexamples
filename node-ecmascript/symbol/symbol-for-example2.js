
const foo = Symbol.for();

const bar = Symbol.for(undefined);

console.log( foo === bar); // true
