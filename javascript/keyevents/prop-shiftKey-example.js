
function keydownHandler(evt)  {

   if(evt.shiftKey) {
      document.getElementById("log-div").innerHTML ="evt.keyEvent = true";
   } else {
      document.getElementById("log-div").innerHTML ="evt.keyEvent = false";
   }

}
