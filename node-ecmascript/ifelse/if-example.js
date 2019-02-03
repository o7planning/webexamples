

if(true)  { // Work
  console.log("if(true)");
}

if(false)  { // Not work!
   console.log("if(false)");
}

if('true')  { // Work
  console.log("if('true')");
}

if('false')  { // Work
  console.log("if('false')");
}

var obj = new Object();

if(obj)  { // Work
   console.log("if(obj)");
}

if('') { // Not work!
   console.log("if('')");
}

if(undefined) { // Not work!
   console.log("if(undefined)");
}

if(0)  { // Not work!
   console.log("if(0)");
}
