// Create a Set from an Array
var fruits = new Set( ["Apple","Banana","Papaya"] );

console.log(fruits); // Set { 'Apple', 'Banana', 'Papaya' }

function showFruit(fruit, thisSet) {
  console.log("Fruit: " + fruit);
}

// Or Call: fruits.forEach(showFruit);
fruits.forEach(showFruit, fruits);
