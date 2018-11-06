
var myMultiple = new Function( "x", "y", "return x * y");

console.log( myMultiple (3, 4) ); // 12


function showTotal()  {
   let quantity = 4;
   let price = 5;

   console.log("Total: " + myMultiple(quantity, price) );
}

showTotal();
