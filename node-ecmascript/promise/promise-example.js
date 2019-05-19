// [ECMAScript 5 Syntax]

var isNetworkOK = true;

// This function return a Promise
function downloadFile(url)  {
    console.log("Start downloading file ..."); // ***

    // A Promise
    var willIGetAFile = new Promise (
        function (resolve, reject) {

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

console.log("Start app.."); // ***

// Call downloadFile(..) function:
// Returns a Promise object:
var willIGetAFile = downloadFile("http://example.com/file.mp3");


willIGetAFile
        .then(function (fulfilled) {
            // Get a File
            // Output: {fileName: 'file.mp3', fileContent: '...', fileSize: '3 MB'}
            console.log(fulfilled);
        })
        .catch(function (error) {
             // Network Error!
             // Output: There is a problem with the network.
             console.log(error.message);
        });

console.log("End app.."); // ***
