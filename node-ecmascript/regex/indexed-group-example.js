
let regex1 = /\w+=\d+/;

let regex2 = /(\w+)=(\d+)/;

let regex3 = /(\w+)(=)(\d+)/;

var STR = "abc=100";

let result1 = regex1.exec(STR);
console.log(result1);// [ 'abc=100', index: 0, input: 'abc=100' ]

let result2 = regex2.exec(STR);
console.log(result2);// [ 'abc=100', 'abc', '100', index: 0, input: 'abc=100' ]

let result3 = regex3.exec(STR);
console.log(result3);// [ 'abc=100', 'abc', '=', '100', index: 0, input: 'abc=100' ]
