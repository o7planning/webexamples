
var rect =  {
   __proto__ : { bgColor : "red", borderColor : "blue" },
   width: 10,
   height: 5
}


console.log(rect.width); // 10 

console.log(rect.__proto__.bgColor); // red


console.log(rect.bgColor); // red
