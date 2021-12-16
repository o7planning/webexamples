var mySimpleModule = (function() {
   var greeting = 'Hello'; // Private variable!
   var friendName = "Tom";
   var sayHello = function()  {
       console.log(`${greeting} ${friendName}!`);
   } 
   var mm = {
       friendName: friendName,
       sayHello: sayHello
   };
   return mm;
})();