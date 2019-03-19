
function keydownHandler(evt)  {

   if(evt.shiftKey) {
      document.getElementById("log-div").innerHTML ="evt.shiftKey = true";
   } else {
      document.getElementById("log-div").innerHTML ="evt.shiftKey = false";
   }

}
