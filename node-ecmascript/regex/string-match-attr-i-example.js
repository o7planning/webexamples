
let str = "A200, S125, b200, s400, x100";

// (1)(vi)
// Một biểu thức chính quy với thuộc tính i (Ignore Case):
// Ký tự 's', theo sau là một số xuất hiện 1 hoặc nhiều lần.
// (en)
// A Regular Expression with i (Ignore Case) Attribute:
// Character 's', followed by a number that appears one or more times.
let regex = /s\d+/i

// (2) (vi)
// Tìm chuỗi con đầu tiên phù hợp với biểu thức chính quy.
// Và trả về một mảng
// (en)
// Find first substring matching the regular expression.
// And return an array.
var array = str.match(regex);


console.log(array); // [ 'S125', index: 6, input: 'A200, S125, b200, s400, x100' ]

console.log(array[0]); // S125

console.log(array['index']); // 6

console.log(array['input']); // A200, S125, b200, s400, x100
