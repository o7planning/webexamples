class Animal {

}

class Cat extends Animal {
  
}

class AsianCat extends Cat {

}

// ------------- TEST --------------------

console.log("AsianCat === Animal? " + (AsianCat === Animal)); // false

let isSubClass1 = AsianCat === Animal || AsianCat.prototype instanceof Animal;

console.log("AsianCat is child of Animal? " + isSubClass1); // true

let isSubClass2 = AsianCat === Animal || Animal.prototype instanceof AsianCat;

console.log("Animal is child of AsianCat? " + isSubClass2); // false
