
class Person  {

    constructor (name)  {
       // property: __name
       this.__name = name;
    }

    // Getter of property name
    get name()  {
       console.log("Call getter of property 'name'!!");
       return this.__name;
    }

}

// ------------ TEST -----------------

let person = new Person("Tom");

// Access to property 'name' ==> Call getter
console.log( person.name); // Tom

// Assign new value to property name.
person.name = "Jerry"; // Not Working!!!!

// Access to property 'name' ==> Call getter
console.log( person.name); // Tom
