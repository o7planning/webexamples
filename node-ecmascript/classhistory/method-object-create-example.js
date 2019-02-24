
var john = {
  name: "John",
  gender: "Male"
};

var other = Object.create(john);


console.log(other.__proto__); // { name: 'John', gender: 'Male' }
