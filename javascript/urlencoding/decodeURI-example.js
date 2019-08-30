var uri = "http://example.com/my search?value=tom and jerry&maxResults=10";

// ==> http://example.com/my%20search?value=tom%20and%20jerry&maxResults=10
var encodedUri = encodeURI(uri);

console.log(encodeUri);

// ==> http://example.com/my search?value=tom and jerry&maxResults=10
var uri2 = decodeURI(encodedUri);

console.log(uri2);
