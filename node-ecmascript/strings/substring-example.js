var str = "This is a String";

var result = str.substring(3, -2);

console.log(result);// s is a Stri

var result2 = str.substring(3);

console.log(result2);// s is a String

// IMPORTANT:
// result3 same as result4:
var result3 = str.substring(4, 1);
var result4 = str.substring(1, 4);

console.log(result3);// his
console.log(result4);// his
