// Constants
const HELLO = "Hello Everybody";
const BYE = "Goodbye!";



// Private function
function doSomething()  {
   console.log("Do Something");
}

// A Function
let sayHello = function(name)  {
  if(name)  {
    console.log("Hello " + name);
  } else {
    console.log(HELLO);
  }
}

// A Function
let sayGoodbye = function(name)  {
  if(name)  {
    console.log("Goodbye " + name);
  } else {
    console.log(BYE);
  }
}

// A Module
// let theModule = {HELLO, BYE, sayHello, sayGoodbye};


export {HELLO, BYE, sayHello, sayGoodbye};
