
var data = [
   ["0100-1111", "Tom"],
   ["0100-5555", "Jerry"],
   ["0100-2222", "Donald"]
];
var myContacts = new Map(data);

console.log("Size: " + myContacts.size); // 3

var deleted = myContacts.delete("0100-5555");

console.log("Deleted? " + deleted); // true

console.log("Size after delete: " + myContacts.size); // 2
