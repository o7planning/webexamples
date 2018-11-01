
function calculateTax(salary)  {

    if(salary >= 1000) {
         // The function will end here
         return salary * 20 / 100;
    }
    if(salary >= 500)  {
         // The function will end here
         return salary * 10 / 100;
    }
    return 0;
}

let tax = calculateTax(2000);
console.log("Salary: 2000, tax: " + tax);

tax = calculateTax(800);
console.log("Salary: 800, tax: " + tax);

tax = calculateTax(300);
console.log("Salary: 300, tax: " + tax);
