// (1) (vi)
// Một biểu thức chính quy với quy tắc:
// Chữ ABC, tiếp theo sau là một ký tự bất kỳ xuất hiện 1 hoặc nhiều lần.
// Quy tắc: ., +
// (en)
// A Regular Expression with Rule:
// ABC, followed by any character appears one or more times.
// Rules: ., +
let aRegex = /ABC.+/

let str1 = "AB DE";

// (2) (vi)
// Tồn tại hay không chuỗi con của chuỗi str1 khớp với aRegex?
// (en)
// Exists a substring of string str1 matching aRegex?
let result1 = aRegex.test(str1);

console.log(result1); // false


let str2 = "123 ABC";
//
let result2 = aRegex.test(str2);

console.log(result2); // false

let str3 = "123 ABCdef";
//
let result3 = aRegex.test(str3);

console.log(result3); // true
