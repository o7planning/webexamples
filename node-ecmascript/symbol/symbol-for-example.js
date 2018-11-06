
const tom = Symbol.for('Tom') // If the Symbol does not exist, it's created

const tom2 = Symbol.for('Tom') // The Symbol exists, so it is returned

console.log( tom === tom2); // true
