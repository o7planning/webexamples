function changeTextAlign(event)  {  
   var textAlign = event.target.value;

   var div = document.getElementById("my-div");
   div.style.textAlign = textAlign;
}
