// Create a Set from an Array
var fruits = new Set( ["Apple","Banana","Papaya"] );

console.log(fruits); // Set { 'Apple', 'Banana', 'Papaya' }

// Iterator Object:
var iteratorEntries = fruits.entries();

var entry;

while( !(entry = iteratorEntries.next() ).done )  {

    console.log(entry.value); // [ 'Apple', 'Apple' ]
}
