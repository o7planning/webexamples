class Person {

}

// A Child class of Person
class AsianPerson extends Person {

}

class Triangle {

}

let person = new Person();
let asianPerson = new AsianPerson();

let triangle = new Triangle();

let isPerson = person instanceof Person;
console.log( isPerson ); // true

console.log( asianPerson instanceof Person ); // true

console.log( person instanceof AsianPerson ); // false
console.log( triangle instanceof Person ); // false
console.log( triangle instanceof AsianPerson ); // false
