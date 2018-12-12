let num = 1;
try {

  // A number cannot have 500 significant digits
  num.toPrecision(500); // ==> RangeError!!
  
}
catch(err) {
  console.log(err.name);
  console.log(err);
}
