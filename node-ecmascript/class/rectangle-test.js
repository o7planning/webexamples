var rectmodule = require('./rectangle.js');

console.log("DEFAULT_WIDTH: " + rectmodule.DEFAULT_WIDTH);
console.log("DEFAULT_HEIGHT: " + rectmodule.DEFAULT_HEIGHT);

var rect = new rectmodule.Rectangle(3, 5);

console.log("Height "+ rect.height);
