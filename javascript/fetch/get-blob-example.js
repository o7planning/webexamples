
// A URL returns Image data (Blob).
var url = "https://raw.githubusercontent.com/o7planning/webexamples/master/_testdatas_/triceratops.png";


function doGetBlob()  {

  // Call fetch(url) with default options.
  // It returns a Promise object:
  var aPromise = fetch(url);

  // Work with Promise object:
  aPromise
    .then(function(response) {
        console.log("OK! Server returns a response object:");
        console.log(response);

        // Get Blob Promise from response object:
        var myBlob_promise = response.blob();
        return myBlob_promise;
    })
    .then(function(myBlob) {
        console.log("OK! Blob:");
        console.log(myBlob);

        var objectURL = URL.createObjectURL(myBlob);
        var myImage = document.getElementById("my-img");
        myImage.src = objectURL;
    })
    .catch(function(error)  {
        console.log("Noooooo! Something error:");
        console.log(error);
    });

}
