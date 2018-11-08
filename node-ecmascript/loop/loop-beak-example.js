console.log("Break example");

// Declare a variable and assign value of 2.
let x = 2;

while (x < 15) {
    console.log("----------------------\n");
    console.log("x = ", x);

    // If x = 5 then exit the loop.
    if (x == 5) {
        break;
    }

    // Increase value of x by 1
    x = x + 1;
    console.log("x after + 1 = ", x);
}

console.log("End of example");
