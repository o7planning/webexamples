// Create a Set from an Array
var fruits = new Set( ["Apple","Banana","Papaya"] );

// Same as: fruits.values()
var fruitIterator = fruits[Symbol.iterator]();

var entry;
while ( !(entry = fruitIterator.next()).done)  {
   console.log(entry); // { value: 'Apple', done: false }
   console.log(entry.value); // Apple
}
