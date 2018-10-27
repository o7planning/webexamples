
var taxFunc = function(value, index, thisArray)  {
     if(value > 1000)  {
          return value * 30 / 100;
     }
     if( value > 500)  {
          return value * 15 / 100;
     }
     return 0;
}


var salaries = [1200, 1100, 300, 8000, 700, 200 ];

//
var taxes = salaries.map(taxFunc, salaries);

console.log(taxes); // [ 360, 330, 0, 2400, 105, 0 ]
