var mySymbol = Symbol();

const myObj = {

  greeting()  {
    console.log("Hello");
  },

  [mySymbol] () {
    console.log("OK, That me!");
  }
}

myObj.greeting(); // Hello

myObj[mySymbol](); // OK, That me!
