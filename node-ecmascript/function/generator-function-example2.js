
function* season()  {
   yield "Spring";
   yield "Summer";
   yield "Autumn";
   yield "Winter";
}

// This method return an Iterator.
var seasonIterator = season();

let e;
while( !(e = seasonIterator.next()).done ) {
  console.log(e.value);
}
