
// Check value between 18 and 60.
// (callback function)
showTestResult = function(value, index, testArray)  {
     if(value >= 18 && value <= 60) {
        console.log("Age " + value + " valid!");
     } else  {
       console.log("Sorry, Age " + value + " invalid!");
     }
}
var ages = [5, 6, 18, 22, 59, 15 ];

// Or: ages.filter(showTestResult);
ages.forEach(showTestResult, ages);
