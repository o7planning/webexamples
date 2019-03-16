
function mousemoveHandler(evt) {

     var html =  "offsetX = " + evt.offsetX +"<br/>"
               + "offsetY = " + evt.offsetY +"<br/>"
               + "clientX = " + evt.clientX +"<br/>"
               + "clientY = " + evt.clientY +"<br/>"
               + "pageX = " + evt.pageX +"<br/>"
               + "pageY = " + evt.pageY +"<br/>"
               + "screenX = " + evt.screenX +"<br/>"
               + "screenY = " + evt.screenY +"<br/>"
               + "movementX = " + evt.movementX +"<br/>"
               + "movementY = " + evt.movementY;

      document.getElementById("target-div").innerHTML = html;
}
