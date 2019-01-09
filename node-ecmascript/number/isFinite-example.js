
let a = 100;

console.log( Number.isFinite(a)); // true

let b = 1 / 0;
console.log( b ); // Infinite

console.log( Number.isFinite(b)); // false

let c = new Number(100);
// c is an Object
console.log( Number.isFinite(c)); // false (!!!)

// Convert c to Number-literal:
let c2 = Number(c);
console.log( Number.isFinite(c2)); // true
