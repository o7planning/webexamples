
function* season()  {
   yield "Spring";
   yield "Summer";
   yield "Autumn";
   yield "Winter";
}

// This method return an Iterator.
var seasonIterator = season();

let value1 = seasonIterator.next().value;
console.log(value1); // Spring

let value2 = seasonIterator.next().value;
console.log(value2); // Summer

let value3 = seasonIterator.next().value;
console.log(value3); // Autumn

let value4 = seasonIterator.next().value;
console.log(value4); // Winter
