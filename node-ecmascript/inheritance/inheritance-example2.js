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

class Mouse extends Animal {

    constructor(name, age, height) {
       super(name);

       this.age = age;
       this.height = height;
    }

    // (1) (vi)
    // Ghi đè (override) phương thức cùng tên của lớp cha.
    // (en)
    // Override method of parent class.
    showInfo()  {
      // (2) (vi)
      // Gọi phương thức showInfo() của lớp cha.
      // (en)
      // Call showInfo() method of parent class.
      super.showInfo();
      console.log ("Age: " + this.age);
      console.log ("Height: " + this.height);
    }

    // (3) (vi)
    // Ghi đè (override) phương thức cùng tên của lớp cha.
    // (en)
    // Override method of parent class.
    move()  {
      console.log("Mouse Moving..");
    }
}

// ------------- TEST --------------------

let jerry = new Mouse("Jerry", 3, 5);

console.log("Call move() method");

jerry.move();

console.log("\n");
console.log("Call showInfo() method");

jerry.showInfo();
