// This example test in Locale: Vietnam UTC+7:00

let date = new Date("January 01, 2019 01:15:00");

var year = date.getFullYear();

console.log(year); // 2019


var utcYear = date.getUTCFullYear();

console.log(utcYear); // 2018
