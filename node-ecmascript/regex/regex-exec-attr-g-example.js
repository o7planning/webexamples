
// (1) (vi)
// Một biểu thức chính quy với quy tắc:
// Một ký tự số bất kỳ xuất hiện 1 hoặc nhiều lần.
// Quy tắc: \d, +
// (en)
// A Regular Expression with Rule:
// Any digit appears one or more times.
// Rules:  \d, +
let aRegex = /\d+/g

let str1 = "ABC 123 X22 345";

let array1;

do {
  array1 = aRegex.exec(str1);
  console.log(array1);
} while( array1 != null);
