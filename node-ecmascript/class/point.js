class Point {

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // (1) (vi)
  // Tính khoảng cách giữa 2 điểm
  // (en)
  // Calulatesthe distance between 2 points
  static distance( point1, point2) {
    const dx = point1.x - point2.x;
    const dy = point1.y - point2.y;

    return Math.hypot(dx, dy);
  }
}

// --- TEST ---

let point1 = new Point( 5, 10);
let point2 = new Point( 15, 20);

// Distance
let d = Point.distance(point1, point2);

console.log("Distance between 2 points: " + d);
