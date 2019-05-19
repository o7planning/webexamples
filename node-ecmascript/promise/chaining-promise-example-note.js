

function openFile(file) {
    var willFileOpen = new Promise(
        function (resolve, reject) {
             var message = "File " + file.fileName + " opened!"
             resolve(message);
        }
    );

    return willFileOpen; // Return a Promise.
}

// Shorter:

function openFile(file) {
    var message = "File " + file.fileName + " opened!"

    // Create a Promise
    var willFileOpen = Promise.resolve(message);
    return willFileOpen;
}




// Call downloadFile(..) function:
// Returns a Promise object:
var willIGetAFile = downloadFile("http://example.com/file.mp3");


willIGetAFile
        .then(openFile) // Chain it!
        .then(function (fulfilled) { // If successful fileOpen.
            // Get a message after file opened!
            // Output: File file.mp3 opened!
            console.log(fulfilled);
        })
        .catch(function (error) {
             // Network Error!
             // Output: There is a problem with the network.
             console.log(error.message);
        });


// OR:

downloadFile("http://example.com/file.mp3")
        .then(openFile) // Chain it!
        .then(function (fulfilled) { // If successful fileOpen.
            // Get a message after file opened!
            // Output: File file.mp3 opened!
            console.log(fulfilled);
        })
        .catch(function (error) {
             // Network Error!
             // Output: There is a problem with the network.
             console.log(error.message);
        });
