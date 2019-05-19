// [ECMAScript 6 Syntax]

var isNetworkOK = true;

// This function return a Promise
downloadFile = function(url)  {
    console.log("Start downloading file ..."); // ***

    // A Promise
    var willIGetAFile = new Promise (
       (resolve, reject) => {

            if (isNetworkOK) {
                console.log("Complete the download process!"); // ***
                var file = {
                    fileName: 'file.mp3',
                    fileContent: '...',
                    fileSize: '3 MB'
                };
                resolve(file); // fulfilled
            } else {
                console.log("File download process failed!"); // ***
                var error = new Error('There is a problem with the network.');
                reject(error); // reject
            }

        }
    );

    return willIGetAFile; // Return a Promise.
}

openFile = function (file) {
    console.log("Start opening file ..."); // ***
    
    var willFileOpen = new Promise(
       (resolve, reject) => {
             var message = "File " + file.fileName + " opened!"
             resolve(message);
        }
    );

    return willFileOpen; // Return a Promise.
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
