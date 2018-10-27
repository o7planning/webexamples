
var sum = function(a, b)  {
  return a + b;
}

var numbers = [1, 2, 4 ];

//
var total = numbers.reduce(sum, 0);

console.log(total); // 7
