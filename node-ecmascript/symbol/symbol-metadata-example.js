const sym = Symbol()

const foo = {
  name: 'Tom',
  age: 25,
  [sym]: 'Some Hidden Metadata'
}

let keys = Object.keys(foo) // name, age
console.log("keys: " + keys);

let propNames = Object.getOwnPropertyNames(foo) // name, age
console.log("propNames: " + propNames);

for(let val of keys) {
  console.log(foo[val]) // Tom // 25
}
