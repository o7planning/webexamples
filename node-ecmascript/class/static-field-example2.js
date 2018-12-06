class Employee {

   constructor (fullName, age)  {
     this.fullName = fullName;
     if(age < Employee.MIN_AGE || age > Employee.MAX_AGE)  {
        throw "Invalid Age " + age;
     }
     this.age = age;
   }
}

Employee.MIN_AGE = 18;
Employee.MAX_AGE = 60;

// ---- TEST ---------

console.log("Mininum Age Allowed: " + Employee.MIN_AGE);
console.log("Maximum Age Allowed: " + Employee.MAX_AGE);

// Set new Maximum Age:
Employee.MAX_AGE = 65;

console.log("Maximum Age Allowed: " + Employee.MAX_AGE);

let baby = new Employee("Some Baby", 1); // Error!!
