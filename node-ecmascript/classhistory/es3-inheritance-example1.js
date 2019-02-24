function Animal(n, g) {
    this.name = n;
    this.gender = g;
}


function Cat(n, g, c) {
    Animal.call(this, n, g); 
    this.color = c;
}


var tom = new Cat("Male", "Tom", "Black");

// Cat { gender: 'Male', name: 'Tom', color: 'Black' }
console.log(tom);
