class Animal {

   constructor(name)  {
     this.name = name;
   }

   showInfo()  {
     console.log("I'm " + this.name);
   }

   move()  {
     console.log("Moving..");
   }

}

class Cat extends Animal {
    constructor(name, age, height) {
       super(name);
       // Cat's properties:
       this.age = age;
       this.height = height;
    }

    // (1) (vi)
    // Ghi đè (override) phương thức cùng tên của lớp cha.
    // (en)
    // Override method of parent class.
    showInfo()  {
      console.log("My name is " + this.name);
    }

    // Other method...
    sleep()  {
       console.log("Sleeping..");
    }
}

// ------------- TEST --------------------

let tom = new Cat("Tom", 3, 20);

console.log("Call move() method");

tom.move();

console.log("\n");
console.log("Call showInfo() method");

tom.showInfo();
