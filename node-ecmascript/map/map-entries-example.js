
var myContacts = new Map();

myContacts.set("0100-1111", "Tom");
myContacts.set("0100-5555", "Jerry");
myContacts.set("0100-2222", "Donald");

var entries = myContacts.entries();

var entry;

while( !(entry = entries.next()).done )  {
  var array = entry.value;

  console.log(array); // [ '0100-1111', 'Tom' ]
}
