try {
  decodeURI("%%%");   // You cannot URI decode percent signs
}
catch(err) {
  console.log("Error Name: " + err.name);
  console.log(err);
}
