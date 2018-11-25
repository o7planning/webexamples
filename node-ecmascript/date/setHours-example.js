
let date = new Date();

console.log(date);// Ex: 2018-11-25T17:36:18.955Z

date.setHours(22, 11, 03, 555); // hours, minutes, seconds, milliseconds

console.log(date); // 2018-11-26T15:11:03.555Z


date.setHours(13, 10);// hours, minutes

console.log(date); // 2018-11-26T06:10:03.555Z
