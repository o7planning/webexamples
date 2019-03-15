
var enterCount = 0;
var moveCount = 0;
var leaveCount = 0;


function mouseleaveHandler(evt) {
    leaveCount += 1;

    showPosition(evt);
    showStatistics();
}

function mouseenterHandler(evt) {
    enterCount += 1;

    showPosition(evt);
    showStatistics();
}

function mousemoveHandler(evt) {
    moveCount += 1;

    showPosition(evt);
    showStatistics();
}




function showPosition(evt) {
    var html = "offsetX: " + evt.offsetX +"<br/>" //
               +
               "offsetY: " + evt.offsetY;

    document.getElementById("position-div").innerHTML = html;
}

function showStatistics() {
    var html =
        "enterCount:" + enterCount + "<br/>" //
        +
        "moveCount:" + moveCount + "<br/>" //
        +
        "leaveCount:" + leaveCount;
    document.getElementById("statistics-div").innerHTML = html;
}
