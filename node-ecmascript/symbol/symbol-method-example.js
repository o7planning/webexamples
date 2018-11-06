
var mySymbol = Symbol();


class MyClass {

   // A method
   greeting()  {
      console.log("Hello");
   }

   // A method
   [mySymbol]() {
      console.log("OK, That me!");
   }
}

var myObj = new MyClass();

myObj.greeting(); // Hello

myObj[mySymbol](); // OK, That me!
