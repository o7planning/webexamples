var data = [
   ["0100-1111", "Tom"],
   ["0100-5555", "Jerry"],
   ["0100-2222", "Donald"]
];
var myContacts = new Map(data);


var has = myContacts.has("0100-5555");

console.log("Has key 0100-5555? " + has); // true
