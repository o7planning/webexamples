
// Test if value between 18 and 60.
testAge = function(value, index, testArray)  {

     return value >= 18 && value <= 60;
}
var ages = [18, 22, 59];

// Or: var okAll = ages.every(testAge);
var okAll = ages.every(testAge, ages);

console.log("OK ALL? " + okAll);
