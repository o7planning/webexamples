// This example test in Locale: Vietnam UTC+7:00

let now = new Date();

console.log(now);// Ex: 2018-11-25T07:29:59.575Z

let hour = now.getHours();

console.log(hour); // 14


let utcHour = now.getUTCHours();

console.log(utcHour); // 7
