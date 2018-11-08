
function* season()  {
   console.log("Do something in Spring");
   yield "Spring";// Spring Stop here!

   console.log("Do something in Summer");
   yield "Summer";// Summer Stop here!

   console.log("Do something in Autumn");
   yield "Autumn";// Autumn Stop here!

   console.log("Do something in Winter");
   yield "Winter";// Winter Stop here!
}

// This method returns an Iterator.
var seasonIterator = season();

let e;
while( !(e = seasonIterator.next()).done ) {
   console.log(e.value);
   if(e.value === "Autumn") {
       console.log("OK Stop after Autumn");
       break;
   }   
}
