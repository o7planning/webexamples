
var showContact = function(key, value, thisMap)  {
    console.log("Phone: " + key +". Name: " + value);
}

var data = [
   ["0100-1111", "Tom"],
   ["0100-5555", "Jerry"],
   ["0100-2222", "Donald"]
];
var myContacts = new Map(data);

// or call: myContacts.forEach(showContact)
myContacts.forEach(showContact, myContacts);
