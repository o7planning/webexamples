
try {
  let x;
  eval(" x  = 'Hello  ");   // Missing ' will produce an error
}
catch(err) {
  console.log("Error Name: " + err.name);
  console.log(err);
}
