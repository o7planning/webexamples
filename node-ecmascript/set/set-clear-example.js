// Create a Set from an Array
var fruits = new Set( ["Apple","Banana","Papaya"] );

console.log(fruits); // Set { 'Apple', 'Banana', 'Papaya' }

// Remove all elements.
fruits.clear();

console.log(fruits); // Set { }

console.log("Size after clear: " + fruits.size);
