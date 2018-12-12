var x;
try {
  x = y + 1;   // y cannot be referenced (used)
}
catch(err) {
   console.log("Error Name: "+ err.name);
   console.log(err);
}
