var str = "This is a String";

var result = str.slice(3, -2);

console.log(result);// s is a Stri

var result2 = str.slice(3);

console.log(result2);// s is a String

// IMPORTANT!!
var result3 = str.slice(5, 1); // ==> Empty String
console.log(result3);//

// IMPORTANT!!
var result4 = str.slice(5, -13); // ==> Empty String
console.log(result4);//
