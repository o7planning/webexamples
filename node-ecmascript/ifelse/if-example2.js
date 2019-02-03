
var number0 = 0;

if(number0)  { // Not work!
   console.log("number 0 (primitive)");
}

if(false)  { // Not work!
   console.log("boolean false (primitive)");
}

// A not null Object
var myObj = {};

if(myObj)  { // Work!
    console.log("A not null Object");
}

// A not null Object
var numberObject = new Number(0);

if(numberObject)  { // Work!
    console.log("A not null Object (Number)");
}

// A not null Object
var booleanObject = new Boolean(false);

if(booleanObject)  { // Work!
    console.log("A not null Object (Boolean)");
}
