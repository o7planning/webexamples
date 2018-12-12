console.log(" -------- Test throw any object ------------");

try {
   let myObj = {};
   throw myObj;
} catch(e)  {
   console.log("Catch error: ");
   console.log(e);
}

console.log(" -------- Test throw a Symbol ------------");

try {
   let mySymbol = Symbol();

   throw mySymbol;
} catch(e)  {
   console.log("Catch error: ");
   console.log(e);
}

console.log(" -------- Test throw a Number ------------");

try {
   let myNumber = 100;

   throw myNumber;
} catch(e)  {
   console.log("Catch error: ");
   console.log(e);
}

console.log(" -------- Test throw a String ------------");

try {
   let myString = "Some error";

   throw myString;
} catch(e)  {
   console.log("Catched error: ");
   console.log(e);
}
