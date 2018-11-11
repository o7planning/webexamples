// (1) (vi)
// Một biểu thức chính quy với quy tắc:
// Bắt đầu với một ký tự số, xuất hiện 5 đến 7 lần, và kết thúc.
// Quy tắc: ^, \d, {X,Y}, $
// (en)
// A Regular Expression with Rule:
// Start with a digit, appears 5 to 7 times, and Ends.
// Rule: ^, \d, {X,Y}, $
let aRegex = /^\d{5,7}$/

let str1 = "The Result is: 12345";
// (2) (vi)
// Tồn tại hay không chuỗi con của chuỗi str1 khớp với aRegex?
// (en)
// Exists a substring of string str1 matching aRegex?
let result1 = aRegex.test(str1);

console.log(result1); // false


let str2 = "A12345";
//
let result2 = aRegex.test(str2);

console.log(result2); // false


let str3 = "912345";
// 
let result3 = aRegex.test(str3);

console.log(result3); // true
