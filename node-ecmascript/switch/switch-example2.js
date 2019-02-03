// (1) (vi)
// Khai báo một biến age (tuổi)
// (en)
// Declare a variable age.
let age = 30;

// (2) (vi)
// Kiểm tra giá trị của age.
// (en)
// Check the value of age.
switch (age) {
    // (3) (vi)
    // Trường hợp tuổi bằng 18
    // (en)
    // Case age = 18
    case 18:
        console.log("You are 18 year old");
        break;
    // (4) (vi)
    // Các trường hợp 20, 30, 40 tuổi.
    // (en)
    // Case age in 20, 30, 40
    case 20:
    case 30:
    case 40:
        console.log("You are " + age);
        break;
    // (5) (vi)
    // Các trường hợp còn lại
    // (en)
    // Remaining case:
    default:
        console.log("Other age");
}
