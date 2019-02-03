// (1) (vi)
// Khai báo một biến age (tuổi)
// (en)
// Declare a variable age
let age = 20;

// (2) (vi)
// Kiểm tra giá trị của age
// (en)
// Check the value of age
switch (age) {
    // (3) (vi)
    // Trường hợp tuổi bằng 18
    // (en)
    // Case age = 18
    case 18:
        console.log("You are 18 year old");
        break;
        // (4) (vi)
        // Trường hợp tuổi bằng 20
        // (en)
        // Case age = 20
    case 20:
        console.log("You are 20 year old");
        break;
        // (5) (vi)
        // Các trường hợp còn lại
        // (en)
        // Remaining cases
    default:
        console.log("You are not 18, 20 year old");
}
