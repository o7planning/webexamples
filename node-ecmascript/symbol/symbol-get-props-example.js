const sym1 = Symbol();
const sym2 = Symbol("Test");

const someObject = {
  name: 'Tom',
  age: 25,
  [sym1]: 'Some Hidden Metadata 1',
  [sym2]: 'Some Hidden Metadata 2'
}

var symbolProps = Object.getOwnPropertySymbols(someObject);

console.log(symbolProps); // [ Symbol(), Symbol(Test) ]

var objKeys = Reflect.ownKeys(someObject);

console.log(objKeys); // [ 'name', 'age', Symbol(), Symbol(Test) ]
