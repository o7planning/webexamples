console.log( Boolean(false) );           // false
console.log( Boolean("") );              // false
console.log( Boolean(null) );            // false
console.log( Boolean() );                // false
console.log( Boolean(undefined) );       // false
console.log( Boolean(0) );               // false
console.log( Boolean(NaN) );             // false
console.log( Boolean(Number.Infinite) ); // false
console.log( Boolean(-Number.Infinite) );// false

console.log(" ------------------- ");
console.log( Boolean("0") );       // true
console.log( Boolean("false") );   // true
console.log( Boolean(1) );         // true
console.log( Boolean(100) );       // true
console.log( Boolean( {} ) );      // true
