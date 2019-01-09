// The Primitives: Number, String, Boolean, null, undefined, Symbol

let mySymbol = Symbol();

var obj = {
   title : "String Key",
   2016 : "Number Key",
   true : "Boolean Key",
   undefined : "undefined Key",
   null : "null Key",
   [mySymbol] : "Symbol Key"
};

// ------------- TEST ----------------------

console.log( obj["title"] ); // String Key
console.log( obj.title ); // String Key


console.log( obj[2016] ); // Number Key
console.log( obj[true] ); // Boolean Key
console.log( obj[undefined] ); // undefined Key
console.log( obj[null] ); // null Key

console.log( obj[mySymbol] ); // Symbol Key
