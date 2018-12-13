
// An Object:
let myObject = {

   // A property
   myProp1 : "Some Value 1",

    // A property
   'myProp2' : "Some Value 2",

   // A property
   100 : "One hundred",

   // A property (Method)
   myProp3 :  function()  {
       console.log("I'm a method");
   },

   // A property (Method)
   [Symbol.iterator] : function() {
      console.log("I'm a [Symbol.iterator] method");
   }

}


// ----------- TEST --------------

console.log( myObject["myProp1"] ); // Some Value 1

console.log( myObject["myProp2"] ); // Some Value 2

console.log( myObject[100] ); // One hundred

myObject["myProp3"](); // I'm a method

myObject[Symbol.iterator]();// I'm a [Symbol.iterator] method
