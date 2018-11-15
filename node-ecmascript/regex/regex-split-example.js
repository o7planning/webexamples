
// (1) (vi)
// Một biểu thức chính quy với quy tắc:
// Ký tự khoảng trắng xuất hiện 1 hoặc nhiều lần
// Quy tắc:  \s, +
// (en)
// A Regular Expression with Rule:
// Whitespace character, appear one or more times
// Rules:  \s, +
let aRegex = /\s+/

let str1 = "Banana \t\t Apple Lemon";

let result1 = str1.split(aRegex);

console.log(result1); // [ 'Banana', 'Apple', 'Lemon' ]
