// This example test in Locale: Vietnam UTC+7:00

let date = new Date("January 01, 2019 01:15:00");

console.log(date);// 2018-12-31T18:15:00.000Z

// January 2019 (Vietnam)
let month = date.getMonth(); // 0

console.log(month); // 0

// December 2018 (UTC)
let utcMonth = date.getUTCMonth(); // 11

console.log(utcMonth); // 11
