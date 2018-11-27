
class Person  {

    constructor (name)  {
       // property: __name
       this.__name = name;
    }

    // Setter of property name
    set name(newName)  {
       console.log("Call setter of property 'name'!!");
       this.__name = newName;
    }

    // A method
    showInfo()  {
       console.log("Person: " + this.__name);
    }
}

// ------------ TEST -----------------

let person = new Person("Tom");

// Can not access to property 'name'
console.log( person.name); // undefined

// Set new value to property 'name' ==> Call setter
person.name = "Jerry";

person.showInfo(); // Person: Tom
