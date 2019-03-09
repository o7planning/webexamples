class Shape  {

    constructor( x, y) {
        this.setLocation(x, y);
    }

    setLocation(x, y) {
        this.x = x;
        this.y = y;
    }
}

// Subclass:
class Circle extends Shape {

    constructor(x, y, radius) {
        // Call Shape's constructor via super
        super(x, y);
        this.radius = radius;
    }

    getArea() {
      return Math.PI * this.radius * this.radius;
    }
}

// ----- TEST ----


var circle = new Circle(0, 2, 5);

console.log( circle.getArea() );
