// Define a class.
class Rectangle  {

    // (1) (vi)
    // Một Constructor có 2 tham số.
    // (Được sử dụng để tạo ra đối tượng)
    // this.width trỏ tới property (thuộc tính) width của lớp.
    // (en)
    // Contructor with 2 parameters.
    // (Used to create instance)
    // this.width refers to the width property of the class

    constructor (width = 5 , height = 10)  {
        this.width = width;
        this.height = height;
    }

    // (2) (vi)
    // Phương thức dùng để tính diện tích hình chữ nhật.
    // (en)
    // A method calculates the area of the rectangle.
    getArea() {
        var area = this.width * this.height
        return area
    }

}

// (3) (vi)
// Tạo 1 đối tượng của lớp Rectangle thông qua Constructor.
// (en)
// Create an object of Rectangle via Constructor.
var rect = new Rectangle(3, 5);

console.log("Height "+ rect.height);
console.log("Width "+ rect.width);

// (4) (vi)
// Gọi phương thức
// (en)
// Call method
let area = rect.getArea();
console.log("Area "+ area );
