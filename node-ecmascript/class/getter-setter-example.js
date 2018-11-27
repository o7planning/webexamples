
class Rectangle  {

    constructor (width = 5 , height = 10)  {
        this.__width = width;
        this.height = height;
    }

    // Getter of property 'width'
    get width()  {
      return this.__width;
    }

    // Setter of property 'width'
    set width(newWidth)  {
      if(newWidth > 0) {
          this.__width = newWidth;
      } else {
          console.log("Invalid width " + newWidth);
      }
    }

}

// ------------ TEST -----------------


var rect = new Rectangle(3, 5);

console.log("Height "+ rect.height); // Height: 5
console.log("Width "+ rect.width); // Width: 3

rect.width = -100;

console.log("Height "+ rect.height); // Height: 5
console.log("Width "+ rect.width); // Width: 3


rect.width = 100;

console.log("Height "+ rect.height); // Height: 5
console.log("Width "+ rect.width); // Width: 100
