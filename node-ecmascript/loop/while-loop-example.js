
console.log("While loop example");
// (1)
// (en)
// Declare a variable, and assign value of 2.
// (vi)
// Tạo một biến x và gán giá trị 2 cho nó.
let x = 2;

// (2)
// (en)
// Condition is x < 10
// If x < 10 is true then run block

// (vi)
// Điều kiện kiểm tra là x < 10
// Nếu x < 10 đúng, thì chạy khối lệnh này.

while (x < 10) {

    console.log("Value of x = ", x);

    x = x + 3;
}

// (3)
// (en)
// This statment is out of while block.
// (vi)
// Dòng lệnh này nằm ngoài khối lệnh while.
console.log("Finish");
