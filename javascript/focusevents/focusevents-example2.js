



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
   console.log(msg);
}

function readystatechangeHandler(evt)  { alert("ready");
   if (document.readyState === 'complete') {
       var myInput = document.getElementById("my-input");

       myInput.addEventListener("focus", focusHandler);
       myInput.addEventListener("focusin", focusinHandler);
       myInput.addEventListener("focusout", focusoutHandler);
       myInput.addEventListener("blur", blurHandler);
   }
}
alert("?? 3");

var myInput = document.getElementById("my-input");

myInput.addEventListener("focus", focusHandler);
myInput.addEventListener("focusin", focusinHandler);
myInput.addEventListener("focusout", focusoutHandler);
myInput.addEventListener("blur", blurHandler);
