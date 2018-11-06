
const foo = Symbol.for('someKey');// This Symbol in Global Map.

const key1 = Symbol.keyFor(foo); // someKey
console.log(key1); // someKey


const bar = Symbol("Test");// This Symbol not in Global Map.

const key2 = Symbol.keyFor(bar);
console.log(key2); // undefined
