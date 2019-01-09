
var a = new Number(100);
var b = new Number(100);

var c = 100; // Stored in Common Pool.
var d = 100; // Stored in Common Pool.

console.log( a === b); // false

console.log( c === d); // true

console.log( a === c); // false
