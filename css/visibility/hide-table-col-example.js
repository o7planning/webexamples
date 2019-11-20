function showOrHideCells(show)  {  
    var elements = document.getElementsByClassName("my-cell");
    var copiedElements = [... elements];

    for(var i=0; i< copiedElements.length; i++) {
        if(show) {
            copiedElements[i].classList.remove("cell-hide");
        } else {
            copiedElements[i].classList.add("cell-hide");
        }
    }
}
