
var defaults = {};

var styleName = "";
var unitValue = "";

function initDefaults()  {
    var childElement = document.getElementById("child");
    var xElements =  document.getElementsByName("x");

    for(var i=0; i< xElements.length; i++)  {
       defaults[xElements[i].value] = childElement.style[xElements[i].value];
       if(xElements[i].checked) {
          styleName = xElements[i].value;
       }
    }

    var yElements =  document.getElementsByName("y");

    for(var i=0; i< yElements.length; i++)  {
       if(yElements[i].checked) {
          unitValue = yElements[i].value;
       }
    }
}

function resetStyles()  {
    var childElement = document.getElementById("child");
    var xElements =  document.getElementsByName("x");

    for(var i=0; i< xElements.length; i++)  {
       childElement.style[xElements[i].value] = defaults[xElements[i].value];
    }
}

function showInfo()  {
    var parentElement = document.getElementById("parent");
    var parentFontSize = window.getComputedStyle(parentElement).fontSize;
    var bodyFontSize = window.getComputedStyle(document.body).fontSize;

    var e = document.getElementById("info");
    var s = "";
    s += "(Body) font-size: " + bodyFontSize + ";<br/>";
    s += "(Parent) font-size: " + parentFontSize + ";";
    s += "<p style='color:red'>"+styleName +": "+ unitValue+";</p>";
    e.innerHTML = s;
}


function setUnitValue(event)  {
    var value = event.target.value;
    resetStyles();
    unitValue = value;
    var e = document.getElementById("child");
    e.style[styleName] = unitValue;
    showInfo();
}



function setStyleName(event)  {
   var sName = event.target.value;
   resetStyles();
   styleName = sName;
   var e = document.getElementById("child");
   e.style[styleName] = unitValue;
   showInfo();
}
