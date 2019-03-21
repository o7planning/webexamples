// ------------ Handlers for Dragged ELement --------------------

function dragstartHandler(evt) {
    console.log("(Element) dragstart");
}

function dragHandler(evt) {
    console.log("(Element) drag (dragging)");
}

function dragendHandler(evt) {
    console.log("(Element) dragend");
}

// ------------ Handlers for Drop Target --------------------

function dragenterHandler(evt)  {
    console.log("(Target) dragenter");
}

// When 'over' you can 'release' (Call ==> evt.preventDefault() )
// ==> 'drop' State
function dragoverHandler(evt)  {
    console.log("(Target) dragover");
    evt.preventDefault();
    // Do something..
}

function dragleaveHandler(evt)  {
    console.log("(Target) dragleave");
}


// When 'drop' you can (Call ==> evt.preventDefault() )
// ==> 'dragend' State!!
function dropHandler(evt) {
    console.log("(Target) drop");
    evt.preventDefault();
    // Do something..
}
