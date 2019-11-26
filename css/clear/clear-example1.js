var floatValue1 = "left"; // FLOAT-LEMENT
var floatValue2 = "left"; // CURRENT-LEMENT
var clearValue2 = "none"; // CURRENT-LEMENT

function changeFloat1(event)  {
   floatValue1 = event.target.value;

   var myElement1 = document.getElementById("float-element");
   myElement1.style.float = floatValue1;
   myElement1.innerHTML = "FLOAT-ELEMENT<br/>{float: "+ floatValue1+"}";
}

function changeFloat2(event)  {
   floatValue2 = event.target.value;

   var myElement2 = document.getElementById("current-element");
   myElement2.style.float = floatValue2;
   myElement2.innerHTML = "CURRENT-ELEMENT<br/>"
                         +"{float: "+ floatValue2+"}<br/>"
                         +"{clear: "+ clearValue2+"}";
}

function changeClear2(event)  {
   clearValue2 = event.target.value;

   var myElement2 = document.getElementById("current-element");
   myElement2.style.clear = clearValue2;
   myElement2.innerHTML = "CURRENT-ELEMENT<br/>"
                         +"{float: "+ floatValue2+"}<br/>"
                         +"{clear: "+ clearValue2+"}";
}
