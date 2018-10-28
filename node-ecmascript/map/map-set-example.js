var data = [
   ["0100-1111", "Tom"],
   ["0100-5555", "Jerry"],
   ["0100-2222", "Donald"]
];
var myContacts = new Map(data);

console.log(myContacts);

// Add new Key/Value pair to Map
myContacts.set("0100-9999", "Mickey");

console.log(myContacts);

// Update
myContacts.set("0100-5555", "Bugs Bunny");

console.log(myContacts);
