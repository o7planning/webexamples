// CHUA SU DUNG!



// Source Object
var john = {
  name: "John",
  gender: "Male"
};

// Destination Object.
var properties = {country: {value: "U.S"}};


var other = Object.create(john, properties);


console.log(other.__proto__ ); // { name: 'John', gender: 'Male' }
