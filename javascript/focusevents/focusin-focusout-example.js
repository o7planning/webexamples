function focusinHandler(evt) {
    // <input>
    evt.target.style.border="1px solid blue";
    // <form>
    evt.target.parentElement.style.border="1px solid red";
}

function focusoutHandler(evt) {
    // <input>
    evt.target.style.border="1px solid black";
    // <form>
    evt.target.parentElement.style.border="1px solid black";
}
