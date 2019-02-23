// ECMAScript 3 class.

function Rectangle(width, height)  {
   this.width = width;
   this.height = height;

   this.getArea = function()  {
       return this.width * this.height;
   }
}

// Create an Object:
var rect = new Rectangle(10, 5);

console.log(rect.getArea()); // 50
