let a = new Boolean(true);
let b = new Boolean(true);
let c = new Boolean(false)

console.log( a == b); // false

// Use Boolean() function to convert Boolean-object to Boolean-primitive
console.log( Boolean(a) == Boolean(b) ); // true

console.log( a == c); // false
