
// Note: event.data is not supported in Firefox, IE  
function inputHandler(evt)  {

   showLog(evt.data);
}

function showLog(text)  {
  var logDiv = document.getElementById("log-div");
  logDiv.innerHTML = logDiv.innerHTML + " .. " + text;
}
