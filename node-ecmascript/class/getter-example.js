
class Person  {

  constructor(firstName, lastName)  {
     this.firstName = firstName;
     this.lastName = lastName;
  }

  get lastName() {
     console.log("Access to lastName property");
     return this.lastName;
  }

  get fullName()  {
     return this.firstName + " " + this.lastName;
  }


}

// TEST

let billGates = new Person("Bill", "Gates");

console.log("First Name: " + billGates.firstName );

console.log("Last Name: " + billGates.lastName );

console.log("Full Name: " + billGates.fullName );
