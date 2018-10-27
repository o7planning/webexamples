
// Test if value between 18 and 60.
testAge = function(value, index, testArray)  {

     return value >= 18 && value <= 60;
}
var ages = [15, 17, 22, 80];

// Or: var ok = ages.some(testAge);
var ok = ages.some(testAge, ages);

console.log("OK? " + ok); // true
