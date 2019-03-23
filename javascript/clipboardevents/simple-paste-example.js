
function copyHandler(evt)  {
  var logDiv = document.getElementById("log-div");
  logDiv.innerHTML = logDiv.innerHTML +" Copied!";
}


function pasteHandler(evt)  {
  var logDiv = document.getElementById("log-div");
  logDiv.innerHTML =  logDiv.innerHTML +" Pasted!";
}
