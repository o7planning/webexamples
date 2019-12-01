// Change CSS Clear for #current-element.

function changeClear(event)  {
   var clearValue = event.target.value;

   var myElement = document.getElementById("current-element");
   myElement.style.clear = clearValue;
}
