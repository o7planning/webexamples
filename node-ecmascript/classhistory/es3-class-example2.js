// ECMAScript 3 class.

function Rectangle(width, height)  {
   this.width = width;
   this.height = height;
}

Rectangle.prototype.bgColor = "red";
Rectangle.prototype.borderColor = "blue";

// Create an Object:
var rect = new Rectangle(10, 5);



console.log(rect); // Rectangle { width: 10, height: 5 }
console.log(rect.__proto__); // Rectangle { bgColor: 'red',borderColor: 'blue' }

console.log(rect.__proto__.bgColor); // red
console.log(rect.__proto__.borderColor); // blue

// (Read the explanation**)
console.log(rect.bgColor); // red
console.log(rect.borderColor); // blue
