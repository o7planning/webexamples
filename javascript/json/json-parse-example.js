

var text = '{ '
  + ' "name": "Amazon", '
  + ' "ceo" : "Jeff Bezos", '
  + ' "employees" : ['
  + '    { "firstName":"John" , "lastName":"Doe" },'
  + '    { "firstName":"Anna" , "lastName":"Smith" },'
  + '    { "firstName":"Peter" , "lastName":"Jones" } '
  + '  ] '
  + '}';


var obj = JSON.parse(text);

console.log(obj.employees);

console.log(obj.ceo); // Jeff Bezos
console.log(obj.employees[0].firstName); // John
console.log(obj.employees[1].firstName); // Anna
console.log(obj.employees[2].firstName); // Peter
