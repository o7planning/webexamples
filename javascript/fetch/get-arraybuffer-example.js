
// A URL returns Video data.
var url = "https://raw.githubusercontent.com/o7planning/webexamples/master/_testdatas_/yodel.mp3";

// AudioContext
const audioContext = new AudioContext();
var bufferSource;

// Get ArrayBuffer (Audio data) and play it.
function doGetArrayBuffer()  {
  bufferSource = audioContext.createBufferSource();

  bufferSource.onended =  function () {
      document.getElementById("play").disabled=false;
  };

  // Call fetch(url) with default options.
  // It returns a Promise object:
  var aPromise = fetch(url);

  // Work with Promise object:
  var retPromise =
   aPromise
    .then(function(response) {

        if(!response.ok)  {
           throw new Error("HTTP error, status = " + response.status);
        }
        // Get ArrayBuffer Promise object from response object:
        var myArrayBuffer_promise = response.arrayBuffer();
        return myArrayBuffer_promise;
    })
    .then(function(myArrayBuffer) { 

        audioContext.decodeAudioData(myArrayBuffer, function(decodedData) {
          bufferSource.buffer = decodedData;
          bufferSource.connect(audioContext.destination);
        });
    });

    return retPromise;
}

function playIt()  {
    console.clear();

    doGetArrayBuffer()
       .then(function() {
            document.getElementById("play").disabled=true;
            bufferSource.start(0);
       })
       .catch(function(error){
            alert("Something Error: " + error.message);
       });
}

function stopIt()  {
    bufferSource.stop(0);
    document.getElementById("play").disabled=false;
}
