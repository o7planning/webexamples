var searchText = "someone@gmail.com";

// ==> someone%40gmail.com
var encodedSearchText = encodeURIComponent(searchText);

console.log(encodedSearchText);

// ==> someone@gmail.com
var text2 = decodeURIComponent(encodedSearchText);

console.log(text2);
