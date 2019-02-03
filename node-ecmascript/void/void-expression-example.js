
void console.log("Test1");  // Test1

console.log( void ("Test2") ); // undefined

console.log( void (2 == "2") );  // undefined

console.log( void (2) == "2" ); // false

console.log( void (2) == undefined); // true
