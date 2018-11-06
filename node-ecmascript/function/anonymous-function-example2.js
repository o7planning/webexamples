
// Create anonymous function and call immediately
(function()  {
   var now = new Date();

   console.log("Now is " + now);
}) () ;


// Create anonymous function and call immediately
(function(name)  {

   console.log("Hello " + name);
}) ("Tom") ;
