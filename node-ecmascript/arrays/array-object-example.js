
// Create an array has 4 elements:
var salaries = new Array(4);

for(var i = 0; i < salaries.length; i++) {

   console.log(salaries[i]); // undefined
}


for(var i = 0; i < salaries.length; i++) {

   // Assign new value to element:
   salaries[i] = 1000 + 20 * i;
}

console.log(salaries[2]); // 1040.
