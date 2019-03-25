
function focusHandler(evt)  {
   showLog("focus");
}

function focusinHandler(evt)  {
   showLog("focusin");
}

function focusoutHandler(evt)  {
   showLog("focusout");
}


function blurHandler(evt)  {
   showLog("blur");
}

function showLog(msg)  {
  var oldHtml= document.getElementById("log-div").innerHTML;
  document.getElementById("log-div").innerHTML=oldHtml + " .. "+ msg;
}

// Javascript Code:
var myInput = document.getElementById("my-input");

myInput.addEventListener("focus", focusHandler);
myInput.addEventListener("focusin", focusinHandler);
myInput.addEventListener("focusout", focusoutHandler);
myInput.addEventListener("blur", blurHandler);
