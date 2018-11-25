// This example test in Locale: Vietnam UTC+7:00

let date = new Date("December 25, 2017 01:15:00"); // Monday

let day = date.getDay();

console.log(day); // 1


let utcDay = date.getUTCDay();

console.log(utcDay); // 0
