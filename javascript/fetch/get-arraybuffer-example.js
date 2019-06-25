/*
(function () {
  'use strict';

  const URL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/Yodel_Sound_Effect.mp3';

  const context = new AudioContext();
  const playButton = document.querySelector('#play');

  let yodelBuffer;

  window.fetch(URL)
    .then(response => response.arrayBuffer())
    .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
    .then(audioBuffer => {
      playButton.disabled = false;
      yodelBuffer = audioBuffer;
    });

    playButton.onclick = () => play(yodelBuffer);

  function play(audioBuffer) {
    const source = context.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(context.destination);
    source.start();
  }
}());
//*/




// A URL returns Video data.
var url = "https://raw.githubusercontent.com/o7planning/webexamples/master/_testdatas_/mov_bbb.mp4";

// AudioContext
const context = new AudioContext();

// Get ArrayBuffer (Video data) and play it.
function doGetArrayBuffer()  {

  // Call fetch(url) with default options.
  // It returns a Promise object:
  var aPromise = fetch(url);

  // Work with Promise object:
  aPromise
    .then(function(response) {
        console.log("OK! Server returns a response object:");
        console.log(response);

        // Get ArrayBuffer Promise object from response object:
        var myArrayBuffer_promise = response.arrayBuffer();
        return myArrayBuffer_promise;
    })
    .then(function(myArrayBuffer) {
        console.log("OK! ArrayBuffer:");
        console.log(myArrayBuffer);

      //  var myVideo = document.getElementById("my-video");
      //  myVideo.src = myArrayBuffer;
      const source = context.createBufferSource();
      source.buffer = myArrayBuffer;
      source.connect(context.destination);
      source.start();

    })
    .catch(function(error)  {
        console.log("Noooooo! Something error:");
        console.log(error);
    });

}
