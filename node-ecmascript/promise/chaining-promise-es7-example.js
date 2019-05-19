// [ECMAScript 7 Syntax]

var isNetworkOK = true;

// An Asynchronous function return a Promise
async function downloadFile(url)  {
    console.log("Start downloading file ..."); // ***

    // A Promise
    var willIGetAFile = new Promise (
       (resolve, reject) => {

           if (isNetworkOK) {
               setTimeout( function() {
                   console.log("Complete the download process!"); // ***
                   var file = {
                       fileName: 'file.mp3',
                       fileContent: '...',
                       fileSize: '3 MB'
                   };
                   resolve(file); // fulfilled
               }, 5 * 1000); // 5 Seconds
           } else {
               var error = new Error('There is a problem with the network.');
               reject(error); // reject
           }
        }
    );

    return willIGetAFile; // Return a Promise.
}

// An Asynchronous function return a Promise
async function openFile(file) {
    console.log("Start opening file ..."); // ***

    var willFileOpen = new Promise(
       (resolve, reject) => {
             var message = "File " + file.fileName + " opened!"
             resolve(message);
        }
    );

    return willFileOpen; // Return a Promise.
}

// Main Function (Asynchronous function)
async function mainFunction()  {
    try {
        console.log("Start app.."); // ***

        // Call downloadFile(..) function with 'await' keyword:
        // It returns a File (Not Promise)
        var file = await downloadFile("http://example.com/file.mp3");

        console.log(file);

        // Call openFile(..) function with 'await' keyword:
        // It returns a String (Not Promise)
        var message = await openFile(file);

        console.log(message);

        console.log("End app.."); // ***
    } catch(e)  {
       console.log(e.message);
    }
}

// Call Main Function:
(async () => {
    await mainFunction();
})();
