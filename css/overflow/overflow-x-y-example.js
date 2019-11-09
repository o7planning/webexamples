function changeOverflowX(event) {
   value = event.target.value;
   var myDiv = document.getElementById("myDiv");
   myDiv.style.overflowX = value;

   showRealValues();
}

function changeOverflowY(event) {
   value = event.target.value;
   var myDiv = document.getElementById("myDiv");
   myDiv.style.overflowY = value;

   showRealValues();
}

function showRealValues()  {
   var myDiv = document.getElementById("myDiv");
   var infoDiv = document.getElementById("infoDiv");
   var text = "overflow-x: " + myDiv.style.overflow  +"<br/>";
   text += "overflow-y: " + myDiv.style.overflowY;

   infoDiv.innerHTML = text;
}
