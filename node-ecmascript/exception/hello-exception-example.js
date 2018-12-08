console.log("Three");

let myObj = {};

console.log("Two");

console.log("One");

// (1) (vi)
// Đối tương myObj không có phương thức showMe().
// Nhưng chúng ta gọi phương thức showMe().
// Và lỗi xẩy ra tại đây.
// (en)
// Object myObj has no showMe() method.
// But we call showMe().
// And error occur here.
myObj.showMe(); // ==> Error!!!!!!!!!


// (2)(vi)
// Dòng mã dưới đây sẽ không được thực thi.
// (en)
// And the following code will not be executed.
console.log("Let's go!");
