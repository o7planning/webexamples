
var symbolA1 = Symbol();
var symbolA2 = Symbol();

console.log(symbolA1); // Symbol()
console.log(symbolA2); // Symbol()
console.log(symbolA1 === symbolA2); // false

var symbolB1 = Symbol("Tom");
var symbolB2 = Symbol("Tom");

console.log(symbolB1); // Symbol(Tom)
console.log(symbolB2); // Symbol(Tom)
console.log(symbolB1 === symbolB2); // false
