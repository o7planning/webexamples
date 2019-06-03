// Success Handler
function successHandler(position)  {
  var logArea = document.getElementById("log-area");

  logArea.value = "";
  logArea.value += "Latitude: " + position.coords.latitude + "\n";
  logArea.value += "Longitude: " + position.coords.longitude + "\n";
}

// Error Handler
function errorHandler(positionError)  {
   if(positionError.code == PositionError.PERMISSION_DENIED) {
       alert("Error: Permission Denied!");
   } else if(positionError.code == PositionError.POSITION_UNAVAILABLE) {
       alert("Error: Position Unavailable!");
   } else if(positionError.code == PositionError.TIMEOUT) {
       alert("Error: Timeout!");
   }
}

function showInfos()  {
  navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
}
