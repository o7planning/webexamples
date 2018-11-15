
// (1) (vi)
// Một biểu thức chính quy với quy tắc:
// Chữ ABC, tiếp theo sau là một ký tự số bất kỳ xuất hiện 1 hoặc nhiều lần.
// Quy tắc: ., \d, +
// (en)
// A Regular Expression with Rule:
// ABC, followed by any digit appears one or more times.
// Rules: ., \d, +
let aRegex = /ABC\d+/

let str1 = "ABC 123";

// (2) (vi)
// Tìm chuỗi con của chuỗi str1 khớp với aRegex?
// (en)
// Find a substring of string str1 matching aRegex?
let result1 = aRegex.exec(str1);

console.log(result1); // null

//
let str2 = "123 ABC123 ABC45 x";
let result2 = aRegex.exec(str2);

console.log(result2); // [ 'ABC123', index: 4, input: '123 ABC123 ABC45 x' ]

console.log(result2[0]); // ABC123
console.log(result2["index"]); // 4
console.log(result2["input"]); // 123 ABC123 ABC45 x
