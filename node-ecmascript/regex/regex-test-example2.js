// (1) (vi)
// Một biểu thức chính quy với quy tắc:
// Chữ ABC, tiếp theo sau là x hoặc y hoặc z
// Tiếp theo sau nữa là một ký tự bất kỳ xuất hiện 1 hoặc nhiều lần
// Quy tắc: [abc], . , +
// (en)
// A Regular Expression with Rule:
// ABC, followed by x or y or z
// Next, followed by any character appears one or more times.
// Rule: [abc], . , +
let aRegex = /ABC[xyz].+/

let str1 = "123ABCx";
// (2) (vi)
// Tồn tại hay không chuỗi con của chuỗi str1 khớp với aRegex?
// (en)
// Exists a substring of string str1 matching aRegex?
let result1 = aRegex.test(str1);

console.log(result1); // false


let str2 = "123ABCzMNP";
//  
let result2 = aRegex.test(str2);

console.log(result2); // true
