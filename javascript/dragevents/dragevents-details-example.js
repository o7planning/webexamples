
function dragstartHandler(evt) {
  evt.dataTransfer.setData("MyDragTargetId", evt.target.id);
}

function draggingHandler(evt) {
   logging("The p element is being dragged");
}


function ondragenterHandler()  {
  logging("The p element enter drop-target");
}

function allowDrop(evt) {
  evt.preventDefault();
}

function dropHandler(evt) {
   evt.preventDefault();
   var data = evt.dataTransfer.getData("MyDragTargetId");
   evt.target.appendChild(document.getElementById(data));
   logging("The p element was dropped");
}

function logging(text)  {
  document.getElementById("log-div").innerHTML = text;
}
