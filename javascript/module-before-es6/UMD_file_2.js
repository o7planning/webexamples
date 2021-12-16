// Load with AMD
require(["myUmdModule"], function (myUmdModule) {
    console.log(myUmdModule.add(2, 2));
    console.log(myUmdModule.subtract(2, 2));
});
// Load with CommonJS
var myUmdModule = require("./myUmdModule");
console.log(myUmdModule.add(2, 2));
console.log(myUmdModule.subtract(2, 2));
// If in Browser environment:
console.log(myUmdModule.add(2, 2));
console.log(myUmdModule.subtract(2, 2));