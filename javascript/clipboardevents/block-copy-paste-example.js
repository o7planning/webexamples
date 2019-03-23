function copyHandler(event) {
  event.preventDefault(); // Cancel event.

  var logDiv = document.getElementById("log-div");
  logDiv.innerHTML = 'Copy blocked!';
}

function pasteHandler(event) {
  event.preventDefault(); // Cancel event.

  var logDiv = document.getElementById("log-div");
  logDiv.innerHTML = 'Paste blocked!';
}
