
class Person  {

    constructor(name) {
      this.name = name;
    }
}

// Create an object
let person = new Person("Tom");

// Access to property 'name' ==> Call getter
console.log( person.name); // Tom

// Assign new value to property name.
person.name = "Jerry"; // !!!

console.log( person.name ); // Jerry
