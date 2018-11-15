// (1) (vi)
// Ký tự khoảng trắng xuất hiện 1 hoặc nhiều lần.
// Quy tắc: \s, +
// (en)
// A Whitespace Characters, appears one or more times.
// Rule: \s, +
let aRegex = /\s+/g

let str = "This \t\t is a \n\t text";

str = str.replace(aRegex, '-');

console.log(str); // This-is-a-text
