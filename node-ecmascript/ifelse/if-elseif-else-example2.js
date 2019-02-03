// (1) (vi)
// Khai báo một biến, đại diện cho tuổi của bạn.
// (en)
// Declare a variable, represents your age.
let age = 20;

// (2) (vi)
// Kiểm tra tuổi nhỏ hơn hoặc bằng 17
// (en)
// Test if age less than or equal 17
if (age <= 17) {
    console.log("You are 17 or younger");
}

// (3) (vi)
// Kiểm tra tuổi bằng 18
// (en)
// Test age equals 18
else if (age == 18) {
    console.log("You are 18 year old");
}
// (4) (vi)
// Kiểm tra tuổi lớn hơn 18 và nhỏ hơn 40
// (en)
// Test if age greater than 18 and less than 40
else if (age > 18 && age < 40) {
    console.log("You are between 19 and 39");
}
// (5) (vi)
// Trường hợp còn lại (Lớn hơn hoặc bằng 40)
// (en)
// Remaining cases (Greater than or equal to 40)
else {
    // (6) (vi)
    // Một lệnh 'if' lồng bên trong.
    // Kiểm tra tuổi khác 50.
    // (en)
    // Nested if statements
    // Test age not equals 50.
    if (age != 50) {
        console.log("You are not 50 year old");
    }

    // (7) (vi)
    // Lệnh phủ định tuổi bằng 50, nghĩa là khác 50.
    // (en)
    // Negative statements
    if (!(age == 50)) {
        console.log("You are not 50 year old");
    }

    // (8) (vi)
    // Nếu tuổi là 60 hoặc 70
    // (en)
    // If age is 60 or 70
    if (age == 60 || age == 70) {
        console.log("You are 60 or 70 year old");
    }

}
