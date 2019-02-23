
var tom =  {
  name: "Tom",
  country: "American"
};

// Delete property - country
delete tom["country"]; // Same as: delete tom.country;

// Add property - gender
tom["gender"] = "Male"; // Same as: tom.gender = "Male";


// Access:
console.log( tom.name ); // Tom
console.log( tom["name"] ); // Tom

console.log( tom["country"] ); // undefined
console.log( tom.country ); // undefined

console.log( tom["gender"] ); // Male
console.log( tom.gender ); // Male
