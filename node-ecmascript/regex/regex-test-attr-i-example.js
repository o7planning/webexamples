// (1) (vi)
// Một biểu thức chính quy với quy tắc:
// Chữ TOM hoặc JERRY
// Tiếp theo là ký tự bất kỳ xuất hiện 1 hoặc nhiều lần
// Tiếp theo sau nữa là chữ CAT
// Quy tắc: (X|Z), . , +
// (en)
// A Regular Expression with Rule:
// ABC or JERRY
// Next, followed by any character appears one or more times.
// Next, followed by CAT
// Rule: (X|Z), . , +
let aRegex = /(TOM|JERRY).+CAT/i

let str1 = "I saw TOM, TOM is a cat";
// (2)(vi)
// Tồn tại hay không chuỗi con của chuỗi str1 khớp với aRegex?
// (en)
// Exists a substring of string str1 matching aRegex?
let result1 = aRegex.test(str1);

console.log(result1); // false


let str2 = "I saw TOM, TOM is a CAT";
//
let result2 = aRegex.test(str2);

console.log(result2); // true
