// Create a Set from an Array
var fruits = new Set( ["Apple","Banana","Papaya"] );

// Append an Element to the Set and returns this Set.
var thisFruits = fruits.add("Cherry");

console.log(fruits); // Set { 'Apple', 'Banana', 'Papaya', 'Cherry' }

// 'Set' does not allow duplicates
fruits.add("Banana");

console.log(fruits); // Set { 'Apple', 'Banana', 'Papaya', 'Cherry' }
