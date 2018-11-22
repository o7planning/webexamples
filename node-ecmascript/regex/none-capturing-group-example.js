
// Date Format: yyyy-MM-dd
let dateRegex = /([0-9]{4})-(?:[0-9]{2})-([0-9]{2})/;


var STR = "2001-11-24";

let result  = dateRegex.exec(STR);
console.log(result);// [ '2001-11-24', '2001', '24', index: 0, input: '2001-11-24' ]

console.log("Date: " + result[0]); // Date: 2001-11-24
console.log("Year: " + result[1]); // Year: 2001
console.log("Day: " + result[2]);  // Day: 24
