console.log( Number.isNaN(10) ); // false

let a = "A String" / 100;
console.log(a); // NaN
console.log( typeof a ); // number
console.log( Number.isNaN(a) ); // true

let b = new Number("A String");
console.log(b); // [Number: NaN]
console.log( typeof b ); // object

// b is an Object, wrap NaN value!
console.log( Number.isNaN(b) ); // false (!!!)

// Convert to Number-literal:
let b2 = Number(b);

console.log( Number.isNaN( b2 )); // true
