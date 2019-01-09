
let tom =  {

   // A Property
   name : "Tom",

   // A Method
   greeting : function(name)  {
      if(name)  {
          console.log("Hello " + name);
      } else  {
          console.log("Hello Everybody!");
      }
   }

}

// ----------- TEST --------------

console.log( tom.name ); // Tom

tom.greeting("Jerry"); // Hello Jerry
