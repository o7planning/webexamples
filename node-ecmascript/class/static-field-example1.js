class Employee {

   constructor (fullName, age)  {
     this.fullName = fullName;
     if(age < Employee.MIN_AGE || age > Employee.MAX_AGE)  {
        throw "Invalid Age " + age;
     }
     this.age = age;
   }

   // A static field: MIN_AGE
   static get MIN_AGE() {
      return 18;
   }

   // A static field: MAX_AGE
   static get MAX_AGE() {
     if(!Employee.__MAXA)  {
        Employee.__MAXA = 60;
     }
     return Employee.__MAXA;
   }

   static set MAX_AGE(newMaxAge)  {
      Employee.__MAXA = newMaxAge;
   }

}

// ---- TEST ---------

console.log("Mininum Age Allowed: " + Employee.MIN_AGE);
console.log("Maximum Age Allowed: " + Employee.MAX_AGE);

// Set new Maximum Age:
Employee.MAX_AGE = 65;

console.log("Maximum Age Allowed: " + Employee.MAX_AGE);

let baby = new Employee("Some Baby", 1); // Error!!
