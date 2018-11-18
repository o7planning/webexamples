var element1 = {}; // An Object
var element2 = {foo: "bar"};
var element3 = {bar: "foo"};


var myWeakSet = new WeakSet( [element1, element2] );
myWeakSet.add(element3);

console.log(myWeakSet.has(element2)); // true
