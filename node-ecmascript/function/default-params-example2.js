
function calculateTax(salary = 1000, rate = 0.2) {
   return salary * rate;
}

// Test
console.log (calculateTax() ) ; // 1000 * 0.2 = 200

console.log (calculateTax(2000) ) ; // 2000 * 0.2 = 400

console.log (calculateTax(3000, 0.5) ) ; // 3000 * 0.5 = 1500

console.log (calculateTax(undefined, 0.5) ) ; // 1000 * 0.5 = 500
