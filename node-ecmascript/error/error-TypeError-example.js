var num = 1;
try {
  num.toUpperCase(); // Number has no method toUpperCase()
}
catch(err) {
  console.log("Error Name: " + err.name);
  console.log(err);
}
