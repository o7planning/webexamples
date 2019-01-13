// g: Global/All, i: Ignore Case
var regex = /apples/gi;

var str = "Apples are round, and apples are juicy.";

let idx = str.search(regex);

console.log(idx); // 0
