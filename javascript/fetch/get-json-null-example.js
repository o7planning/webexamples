
// A URL returns null JSON data.
var url = "https://rawgit.com/o7planning/webexamples/master/_testdatas_/json-null-data.json";


function doGetJSON()  {

  // Call fetch(url) with default options.
  // It returns a Promise object:
  var aPromise = fetch(url);

  // Work with Promise object:
  aPromise
    .then(function(response) {
        console.log("OK! Server returns a response object:");
        console.log(response);

        // Get TEXT Promise object from response object:
        var myText_promise = response.text();
        return myText_promise;
    })
    .then(function(myText) {
        console.log("OK! TEXT:");
        console.log(myText);

        var myJSON = null;

        if(myText != null && myText.length > 0)  {
            myJSON = JSON.parse(myText);
        }
        console.log("OK! JSON:");
        console.log(myJSON);
    })
    .catch(function(error)  {
        console.log("Noooooo! Something error:");
        console.log(error);
    });

}
