
class Animal {

   constructor(name)  {

     this.name = name;

   }

}

class Cat extends Animal {

    constructor(name, age, height) {

       super(name);

       this.age = age;
       this.height = height;
    }

}

// ------------- TEST --------------------

let tom = new Cat("Tom", 3, 20);

console.log("Call move() method");

tom.move();

console.log("\n");
console.log("Call showInfo() method");

tom.showInfo();
