console.log(Number.isInteger(0));         // true
console.log(Number.isInteger(1));         // true
console.log(Number.isInteger(-100000));   // true

console.log(Number.isInteger(0.1));       // false
console.log(Number.isInteger(Infinity));   // false
console.log(Number.isInteger("10"));      // false
console.log(Number.isInteger(true));      // false
console.log(Number.isInteger(false));     // false

// A Number-object
let a = new Number(100);
console.log(Number.isInteger( a ));     // false (!!!)

// Convert Number-object to Number-literal
let a2 = Number(a);
console.log(Number.isInteger( a2 ));     // true
