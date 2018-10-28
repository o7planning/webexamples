// Create a Set from an Array
var fruits = new Set( ["Apple","Banana","Papaya"] );

console.log(fruits); // Set { 'Apple', 'Banana', 'Papaya' }

// Delete an element:
var deleted = fruits.delete("Banana");

console.log("Deleted? " + deleted); // true

console.log(fruits); // Set { 'Apple', 'Papaya' }
