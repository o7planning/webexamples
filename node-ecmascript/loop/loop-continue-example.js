console.log("Continue example");

// (1)
// (en)
// Declare a variable and assign value of 2
// (vi)
// Khai báo một biến và gán giá trị 2
x = 2

while (x < 7) {
    console.log("----------------------\n")
    console.log("x = ", x)

    // (2)
    // (en)
    // % is used for calculating remainder
    // If x is even, then ignore the command line below of continue
    // and start new iteration.

    // (vi)
    // % : Là phép chia lấy số dư.
    // Nếu x là số chẵn, thì bỏ qua các lệnh bên dưới của 'continue'
    // để tiếp tục bước lặp (iteration) mới.
    if (x % 2 == 0) {
        // Increase x by 1.
        x = x + 1;
        continue;
    }
    else {
        // Increase x by 1.
        x = x + 1

        console.log("x after + 1 =", x)
    }
}

console.log("End of example");
