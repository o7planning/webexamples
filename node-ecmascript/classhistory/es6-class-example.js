// ECMAScript 6 class:

class Rectangle  {

  constructor (width , height)  {
      this.width = width;
      this.height = height;
  }

  getArea()  {
    return this.width * this.height;
  }

}


// ------------- TEST -------------------

var rect = new Rectangle(10, 5);

var area = rect.getArea();

console.log("Width: " + rect.width);
console.log("Height: " + rect.height);
console.log("Area: " + area);
