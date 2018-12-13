// An Iterator Object
let myIterator = {

   next : function()  {
      return  {value: Math.random(), done: false};
   }
}

// A Iterable object:
let myIterable = {
   myProp : "Some value",

   // A Method returns an Iterator object.
   [Symbol.iterator] :  function() {
       return myIterator;
   }

}

// ------ TEST -----------

// An iterator object.
let it = myIterable[Symbol.iterator]();

let entry = it.next();
console.log(entry);

entry = it.next();
console.log(entry);
