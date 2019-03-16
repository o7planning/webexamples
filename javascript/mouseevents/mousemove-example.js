
var moveCount = 0;


function mousemoveHandler(evt) {
    moveCount += 1;
    showStatistics();
}


function showStatistics() {
    var html = "moveCount:" + moveCount;
    document.getElementById("statistics-div").innerHTML = html;
}
