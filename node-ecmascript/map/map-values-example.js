
var data = [
   ["0100-1111", "Tom"],
   ["0100-5555", "Jerry"],
   ["0100-2222", "Donald"]
];
var myContacts = new Map(data);

var iteratorNames = myContacts.values();

var entry;

while( !(entry = iteratorNames.next()).done )  {
  var name = entry.value;

  console.log(name); // Tom
}
