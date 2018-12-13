// An Iterable class.
class MyClass {

    constructor() {

    }

    someMethod() {
        console.log("Some method");
    }

    [Symbol.iterator]() {
        // An Iterator object.
        var myIterator = {
            next: function() {
                return {value: Math.random(),done: false};
            }
        };
        return myIterator;
    }

}

// ----------- TEST -----------------

let myObject = new MyClass();

myObject.someMethod();

// An Iterator Object.
let it = myObject[Symbol.iterator]();
let entry;
let i = 0;
while ( (entry = it.next()).done == false )  {
    console.log( entry);
    i++;
    if(i > 5)  {
      break;
    }
}
