
let date = new Date("February 25, 2017 23:15:00"); // 25/02/2017

date.setDate(18);

console.log(date); // 2017-02-18T16:15:00.000Z

// ??
date.setDate(31);

console.log(date); // 2017-03-03T16:15:00.000Z
