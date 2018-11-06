
var prop1 = Symbol();
var prop2 = Symbol();
var prop3 = Symbol("Something");

var myObject = {
   name : "Tom",
   gender: "Male",
   [prop1]: "Something 1",
   [prop2]: "Something 2",
   [prop3]: "Something 3",
};

console.log( myObject["name"] );  // Tom
console.log( myObject["gender"] ); // Male

console.log( myObject[prop1] ); // Something 1
