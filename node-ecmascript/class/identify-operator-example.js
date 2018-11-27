// Define a class.
class Rectangle  {
    constructor (width = 5 , height = 10)  {
        this.width = width;
        this.height = height;
    }
    getArea() {
        var area = this.width * this.height;
        return area;
    }
}

// (1) (en)
// Create object: r1
// (vi)
// Tạo đối tượng: r1
let r1 = new Rectangle( 20,  10);

// (2) (en)
// Create object: r2
// (vi)
// Tạo đối tượng: r2
let r2 = new Rectangle( 20, 10);

let r3 = r1;


let  b12  =   r1 === r2; // false
let  b13  =   r1 === r3; // true

console.log("r1 === r2 ? " + b12); // false
console.log("r1 === r3 ? " + b13); // true


var bb12  = r1 !== r2; // true
var bb13  = r1 !== r3; // false


console.log("r1 !== r2 ? " + bb12); // true
console.log("r1 !== r3 ? " + bb13); // false
