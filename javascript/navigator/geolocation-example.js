// Success Handler
function successHandler(position)  {
  var logArea = document.getElementById("log-area");

  logArea.value = "";
  logArea.value += "Latitude: " + position.coords.latitude + "\n";
  logArea.value += "Longitude: " + position.coords.longitude + "\n";
}

// Error Handler
function errorHandler(positionError)  {
   if(positionError.code == 1) { // PERMISSION_DENIED
       alert("Error: Permission Denied! " + positionError.message);
   } else if(positionError.code == 2) { // POSITION_UNAVAILABLE
       alert("Error: Position Unavailable! " + positionError.message);
   } else if(positionError.code == 3) { // TIMEOUT
       alert("Error: Timeout!" + positionError.message);
   }
}

function showInfos()  {
  navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
}
