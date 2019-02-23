// ECMAScript 3 class.

function Rectangle(width, height)  {
   this.width = width;
   this.height = height;
}

// Create an Object:
var rect = new Rectangle(10, 5);



console.log(rect); // Rectangle { width: 10, height: 5 }
console.log(rect.__proto__); // Rectangle {}
