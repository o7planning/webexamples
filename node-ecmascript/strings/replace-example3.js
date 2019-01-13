var str = "Mr Blue has a blue house and a blue car";

function myfunc(subStr)  {
   return subStr.toUpperCase();
}

// Replace (g: Global/All, i: Ignore Case)
var res = str.replace(/blue|house|car/gi,  myfunc);

console.log(res); // Mr BLUE has a BLUE HOUSE and a BLUE CAR
