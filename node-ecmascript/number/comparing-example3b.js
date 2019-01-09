
let a = new Number(100);
let b = new Number(100);
let c = new Number(120);

console.log( a == b); // false

// Use Number() function to convert Number-object to Number-literal
console.log( Number(a) == Number(b) ); // true

console.log( a == c); // false
