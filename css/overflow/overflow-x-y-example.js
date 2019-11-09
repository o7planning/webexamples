function changeOverflowX(event) {
   value = event.target.value;
   var myDiv = document.getElementById("myDiv");
   myDiv.style.overflowX = value;
}

function changeOverflowY(event) {
   value = event.target.value;
   var myDiv = document.getElementById("myDiv");
   myDiv.style.overflowY = value;
} 
