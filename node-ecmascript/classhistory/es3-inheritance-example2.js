

// Class: Animal
function Animal(n, g) {
    this.name = n;
    this.gender = g;
}

Animal.prototype.sleep = function()  {
    console.log("Animal sleeping..");
}

Animal.prototype.move = function()  {
    console.log("Animal moving..");
}

// Class: Cat
function Cat(n, g, c) {
    Animal.call(this, n, g); // IMPORTANT!!
    this.color = c;
}

// IMPORTANT!!
var TempFunc = function() {}; // Temporary class.
TempFunc.prototype = Animal.prototype;
Cat.prototype = new TempFunc();
// ------------------


Cat.prototype.cry = function()  {
    console.log("Meo meo");
}

// Override 'move' method of Animal.
Cat.prototype.move = function() {
    console.log("Cat moving..");
}

var tom = new Cat("Male", "Tom", "Black");

// Cat { gender: 'Male', name: 'Tom', color: 'Black' }
console.log(tom);

tom.move(); // Cat moving..
tom.sleep(); // Animal sleeping..
tom.cry(); // Meo meo
