// (1) (vi)
// Một biểu thức chính quy với quy tắc:
// Bắt đầu với một ký tự số, xuất hiện 5 đến 7 lần, và kết thúc.
// Quy tắc: ^, \d, {X,Y}, $
// (en)
// A Regular Expression with Rule:
// Start with a digit, appears 5 to 7 times, and Ends.
// Rule: ^, \d, {X,Y}, $
let aRegex = /^\d{5,7}$/m

let str1 = "The Result is: 12345";
//
let result1 = aRegex.test(str1);

console.log(result1); // false

// (2) (vi)
// Chuỗi này tách thành 2 chuỗi con:
// 'The Result is:' & '12345'
// (en)
// This string is splitted into two substrings
// 'The Result is:' & '12345'
let str2 = "The Result is:\n12345";
//
let result2 = aRegex.test(str2);

console.log(result2); // true
