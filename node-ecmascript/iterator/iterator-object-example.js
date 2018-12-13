
// An Iterator Object:
let myIterator = {

  someProp: "Some Prop",
  //
  next : function()  {
      return  {
         value: "Tom",
         done: false
      }
  }

}

// ----------- TEST -------------------

let entry = myIterator.next();

console.log(entry); // { value: 'Tom', done: false }

console.log(entry.value); // Tom
