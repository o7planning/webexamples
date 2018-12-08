console.log("Three");

let myObj = {};

console.log("Two");

console.log("One");

try {
    // (1) (vi)
    // Đối tương myObj không có phương thức showMe().
    // Nhưng chúng ta gọi phương thức showMe().
    // Và lỗi xẩy ra tại đây.
    // (en)
    // Object myObj has no showMe() method.
    // But we call showMe().
    // And error occur here.
    myObj.showMe(); // ==> Error!

    // (2) (vi)
    // Code này sẽ bị bỏ qua
    // (en)
    // This code will be ignored
    console.log("!!!");

} catch (e) {
    console.log("Catched error: " + e);
    console.log("OK continue...");
}

console.log("Let's go!");
