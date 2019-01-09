let a = 100;

console.log( Number.isSafeInteger(a) );     // true

let b = Math.pow(2, 54); // 2^54

console.log(  Number.isSafeInteger(b) );   // false
