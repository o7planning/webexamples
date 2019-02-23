function Shape(x, y) {
    this.x = x;
    this.y = y;
}
//Shape.prototype.constructor = Shape;
Shape.prototype.pos = function() {
    return [this.x, this.y];
};

console.log(Shape.call);

/**
 * Child
 */
function Rect(x, y, w, h) {
    Shape.call(this, x, y);
    this.w = w;
    this.h = h;
}

new Rect();
