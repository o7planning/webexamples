
function Person(name)  {

    this.name = name;
}


var john = new Person("John");



var john2 = {age: 30};
Person.call(john2, "Tom");

console.log(john2);
