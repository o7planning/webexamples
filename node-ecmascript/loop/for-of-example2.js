// Create a Map object.
var myContacts = new Map();

myContacts.set("0100-1111", "Tom");
myContacts.set("0100-5555", "Jerry");
myContacts.set("0100-2222", "Donald");


for( let arr of myContacts)  {
  console.log(arr);
  console.log(" - Phone: " + arr[0]);
  console.log(" - Name: " + arr[1]);
}
