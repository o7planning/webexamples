// (1) (vi)
// Một biểu thức chính quy với quy tắc:
// TOM hoặc JERRY
// Quy tắc: (X|Z)
// (en)
// A Regular Expression with Rule:
// TOM or JERRY
// Rule:  (X|Z)
let aRegex = /(TOM|JERRY)/

let str = "I saw TOM, TOM caught JERRY";

let index = str.search(aRegex);

console.log(index); // 6
