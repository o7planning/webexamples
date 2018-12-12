
// Create an Error
let myError = new Error();

myError.name = "MyError";
myError.message = "My Error String";


try {

  throw myError;

} catch(err)  {

  console.log("Error Name: " + err.name);
  console.log("Error Message: " + err.message);
  console.log("Type of err.stack: " + (typeof err.stack));

  console.log("--- Stack Trace: ---");  
  console.log(err.stack);
}
