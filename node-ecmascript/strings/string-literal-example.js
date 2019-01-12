let a = "Tom";
let b = "Jerry";
let c = "Jerry";

console.log(a); // Tom
console.log(b); // Jerry
console.log(c); // Jerry

// a, b: Same address?
console.log( a === b); // false

// b, c: Same address?
console.log( b === c); // true
