var DEFAULT_WIDTH = 5;
var DEFAULT_HEIGHT = 20;

class Rectangle  {

    // (1) (en)
    // Contructor with 2 parameters.
    // (Used to create instance)
    // this.width refers to the width property of the class
    // (vi)
    // Một Constructor có 2 tham số.
    // (Được sử dụng để tạo ra đối tượng)
    // this.width trỏ tới thuộc tính (property) width của lớp.
    constructor (width = 5 , height = 10)  {
        this.width = width;
        this.height = height;
    }

    // (2) (en)
    // A method calculates the area of the rectangle.
    // (vi)
    // Phương thức dùng để tính diện tích hình chữ nhật.
    getArea() {
        var area = this.width * this.height
        return area
    }

}


// (3) (vi)
// Xuất khẩu một vài thứ ra bên ngoài.
// (en)
// Export a few things to the outside.
module.exports = {DEFAULT_WIDTH, DEFAULT_HEIGHT, Rectangle};
