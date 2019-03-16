
var enterCount = 0;
var overCount = 0;

var leaveCount = 0;
var outCount = 0;


function mouseenterHandler(evt) {
    enterCount += 1;
    showStatistics();
}

function mouseoverHandler(evt) {
    overCount += 1;

    showStatistics();
}


function mouseleaveHandler(evt) {
    leaveCount += 1;
    
    showStatistics();
}

function mouseoutHandler(evt) {
    outCount += 1;

    showStatistics();
}


function showStatistics() {
    var html =
        "enterCount:" + enterCount + "<br/>" //
        +
        "overCount:" + overCount  + "<hr/>" //
        +
        "leaveCount:" + leaveCount + "<br/>" //
        +
        "outCount:" + outCount ;
    document.getElementById("statistics-div").innerHTML = html;
}
