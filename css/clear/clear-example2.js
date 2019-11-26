var floatValue1 = "left"; // FLOAT-LEMENT
var clearValue2 = "none"; // CURRENT-LEMENT

function changeFloat1(event)  {
   floatValue1 = event.target.value;

   var myElement1 = document.getElementById("float-element");
   myElement1.style.float = floatValue1;
   myElement1.innerHTML = "FLOAT-ELEMENT<br/>{float: "+ floatValue1+"}";
}

function changeClear2(event)  {
   clearValue2 = event.target.value;

   var myElement2 = document.getElementById("current-element");
   myElement2.style.clear = clearValue2;
   myElement2.innerHTML = "CURRENT-ELEMENT<br/>" 
                         +"{clear: "+ clearValue2+"}";
}
