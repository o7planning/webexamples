console.log("Three");

try {

  console.log("Two");

  // Throw a String!
  throw "Some error!!";

} catch(e)  {
   console.log("typeof e = " + (typeof e));
   // Log the error
   console.log(e); // Some error!!
}

console.log("One");
