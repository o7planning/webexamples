
let date = new Date();

console.log(date);// Ex: 2017-02-25T16:15:00.000Z

date.setFullYear(2015, 3, 19);

console.log(date); // 2018-12-19T16:15:00.000Z


date.setFullYear(2014, 10);

console.log(date); // 2018-12-25T16:15:00.000Z


date.setFullYear(2013);

console.log(date); // 2019-12-25T16:15:00.000Z
