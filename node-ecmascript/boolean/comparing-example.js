var a = new Boolean(true);
var b = new Boolean(true);

var c = false; // Stored in Common Pool.
var d = false; // Stored in Common Pool.

console.log( a === b); // false

console.log( c === d); // true

console.log( a === c); // false
