// (1) (vi)
// Một biểu thức chính quy với quy tắc:
// Bắt đầu với chữ TOM hoặc JERRY
// Tiếp theo là ký tự bất kỳ xuất hiện 1 hoặc nhiều lần
// Tiếp theo sau nữa là chữ CAT, và kết thúc
// Quy tắc: ^, (X|Z), . , +, $
// (en)
// A Regular Expression with Rule:
// Start with TOM or JERRY
// Next, followed by any character appears one or more times.
// Next, followed by CAT, and ends.
// Rule: ^, (X|Z), . , +, $
let aRegex = /^(TOM|JERRY).+CAT$/

let str1 = "I saw TOM, TOM caught JERRY";
// (2) (vi)
// Tồn tại hay không chuỗi con của chuỗi str1 khớp với aRegex?
// (en)
// Exists a substring of string str1 matching aRegex?
let result1 = aRegex.test(str1);

console.log(result1); // false


let str2 = "I saw TOM, TOM is a CAT";
//
let result2 = aRegex.test(str2);

console.log(result2); // false


let str3 = "JERRY is a mouse, It is afraid of the CAT";
//
let result3 = aRegex.test(str3);

console.log(result3); // true
