
let str = "This is \n\t a \t String";

// (1)(vi)
// Một biểu thức chính quy với thuộc tính g (Global):
// Ký tự không phải khoảng trắng, xuất hiện 1 hoặc nhiều lần.
// (en)
// A Regular Expression with g (Global) Attribute:
// Non-whitespace characters, one or more occurrences.
let regex = /\S+/g

// (2) (vi)
// Tìm tất cả các chuỗi con phù hợp với biểu thức chính quy.
// Và trả về một mảng các chuỗi con phù hợp.
// (en)
// Find all substrings matching the regular expression.
// And return an array of matching substrings.
var array = str.match(regex);


console.log(array); // [ 'This', 'is', 'a', 'String' ]
