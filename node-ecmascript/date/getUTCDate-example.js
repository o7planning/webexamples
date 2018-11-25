// This example test in Locale: Vietnam UTC+7:00

let date = new Date("December 25, 2017 01:15:00");

let day = date.getDate();

console.log(day); // 25  (Test in Vietnam UTC+7:00)

let utcDay = date.getUTCDate();

console.log(utcDay); // 24  (UTC)
