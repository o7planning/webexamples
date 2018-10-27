
// Test if value between 18 and 60.
// (callback function)
testAge = function(value, index, testArray)  {

     return value >= 18 && value <= 60;
}
var ages = [5, 6, 18, 22, 59, 15 ];

// Or: var validAges = ages.filter(testAge);
var validAges = ages.filter(testAge, ages);

console.log("Valid Ages: ");
console.log(validAges); // [ 18, 22, 59 ]
