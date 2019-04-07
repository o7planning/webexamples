function clickHandler(evt) {


    var URL= "https://rawgit.com/o7planning/webexamples/master/_testdatas_/simple-xml-data.xml";
    // var URL= "https://rawgit.com/o7planning/webexamples/master/_testdatas_/triceratops.png";

    // Create XMLHttpRequest.
    let xhr = new XMLHttpRequest();

    let async = true;

    // Initialize It.
    xhr.open("GET", URL, async);

    resetLog();

    xhr.onprogress = function(progressEvent) {
        appendLog("onprogress! " + progressEvent);
    }

    // readyState (State of request):
    // 0 - XMLHttpRequest.UNSENT
    // 1 - XMLHttpRequest.OPENED
    // 2 - XMLHttpRequest.HEADERS_RECEIVED
    // 3 - XMLHttpRequest.LOADING
    // 4 - XMLHttpRequest.DONE
    xhr.onreadystatechange = function(event)  {
        appendLog("onreadystatechange! readyState = " + xhr.readyState);
        appendLog(" status = " + xhr.status);
        appendLog(" statusText = " + xhr.statusText);
    }

    xhr.onload = function(progressEvent) {
        appendLog("onload!");
        appendLog(" status = " + xhr.status);
        appendLog(" statusText = " + xhr.statusText);

        if (xhr.status == 200) {
            appendLog(" ------ xhr.responseText ------: ");
            appendLog(xhr.responseText);

            appendLog(" ------ xhr.responseXML -------: ");
            appendLog(xhr.responseXML); // [object XMLDocument]

            // Convert XMLDocument to String.
            var xmlString = (new XMLSerializer()).serializeToString(xhr.responseXML);
            appendLog(xmlString);
        }
    }

    xhr.onerror = function(progressEvent) {
        appendLog("onerror!");
        appendLog("Has Error!");
    }

    // Send it (Without body data)
    xhr.send();
}

function resetLog() {
    document.getElementById('textarea-log').value = "";
}

function appendLog(msg) {
    document.getElementById('textarea-log').value += "\n" + msg;
}
