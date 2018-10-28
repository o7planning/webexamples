
var data = [
   ["0100-1111", "Tom"],
   ["0100-5555", "Jerry"],
   ["0100-2222", "Donald"]
];
var myContacts = new Map(data);

var iteratorPhones= myContacts.keys();

var entry;

while( !(entry = iteratorPhones.next()).done )  {
  var phone = entry.value;

  console.log(phone); // 0100-1111
}
