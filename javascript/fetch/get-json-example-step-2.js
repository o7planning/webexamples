
// A URL returns JSON data.
var url = "https://rawgit.com/o7planning/webexamples/master/_testdatas_/json-simple-data.json";


function doGetJSON()  {

  // Call fetch(url) with default options.
  // It returns a Promise object:
  var aPromise = fetch(url);

  // The then() method retuns another Promise object:
  var aPromise2 = aPromise
    .then(function(response) {
        console.log("OK! Server returns a response object:");
        console.log(response);

        // Get JSON from response object:
        var myJSON = response.json();
        return myJSON;
    });

  // Work with aPromise2:
  aPromise2
    .then(function(myJSON)  {
        console.log("OK! JSON:");
        console.log(myJSON);
    });

}
