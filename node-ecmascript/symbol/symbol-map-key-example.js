
var key1 = Symbol();
var key2 = Symbol();
var key3 = Symbol("Something");

var map = new Map();

map.set(key1, "Tom");
map.set("a_string_key", "Donald");
map.set(key2, "Jerry");
map.set(key3, "Mickey");

console.log( map.get(key1));  // Tom
console.log( map.get("a_string_key")); // Donald
console.log( map.get(key2));  // Jerry
console.log( map.get(key3));  // Mickey
