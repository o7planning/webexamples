

function keydownHandler1(evt)  {

   var logDiv = document.getElementById("log-div1");

   logDiv.innerHTML = "event.code= " + evt.code +"<br/>"
                    + "event.charCode= "+ evt.charCode;

}


function keydownHandler2(evt)  {

   var logDiv = document.getElementById("log-div2");

   logDiv.innerHTML = "event.key= " + evt.key +"<br/>"
                    + "event.keyCode= "+ evt.keyCode;

}
