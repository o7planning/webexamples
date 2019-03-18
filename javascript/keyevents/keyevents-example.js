
function keydownHandler(evt)  {
    appendLog("Keydown!");
}

function keyupHandler(evt)  {
    appendLog("Keyup!");
}

function keypressHandler(evt)  {
    appendLog("Keypress!");
}


function appendLog(text)  {
    var oldText = document.getElementById("log-div").value;
    document.getElementById("log-div").value = oldText+"\n"+ text;
}

function clearLog()  { 
    document.getElementById("log-div").value = "";
}
