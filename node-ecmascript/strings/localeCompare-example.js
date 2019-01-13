
//  "A" - "B" - "C"   ("A" < "B")
console.log( "A".localeCompare("B") ); // -1

// "B" > "A"
console.log( "B".localeCompare("A") ); // 1

// "Abc" < "bced"
console.log( "Abc".localeCompare("bced") ); // -1
