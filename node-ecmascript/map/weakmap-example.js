var key1 = {}; // An Object
var key2 = {foo: "bar"};
var key3 = {bar: "foo"};

var data = [
   [key1, "Tom"],
   [key2, "Jerry"],
   [key3, "Donald"]
];
var myWeakMap = new WeakMap(data);

console.log(myWeakMap.get(key1));
