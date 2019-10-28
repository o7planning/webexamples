var types= [
  "none",
	"disc",
	"circle",
	"square",

  "armenian",
	"decimal",
	"cjk-ideographic",
	"decimal-leading-zero",
	"georgian",
	"hebrew",
	"hiragana",
	"hiragana-iroha",
	"katakana",
	"katakana-iroha ",
	"lower-alpha",
	"lower-greek",
	"lower-latin",
	"lower-roman",
	"upper-alpha",
	"upper-greek",
	"upper-latin",
	"upper-roman"];


function initRadios()  {
  var radioContainer = document.getElementById("radio-container");

  for(var i = 0; i< types.length; i++) {
      var radioElement = document.createElement("input");
      radioElement.type = "radio";
      radioElement.name = "type";
      radioElement.value = types[i];
      var spanElement = document.createElement("span");
      spanElement.innerHTML = types[i];
      spanElement.style.marginRight = "5px";
      var brElement = document.createElement("br");

      radioElement.addEventListener("click", function(event)  {
         var infoElement = document.getElementById("my-info");
         infoElement.innerHTML = "{ list-style-type: " + event.target.value + " }";
         var listElement = document.getElementById("my-list");
         listElement.style.listStyleType = event.target.value;
      });

      radioContainer.appendChild(radioElement);
      radioContainer.appendChild(spanElement);
      radioContainer.appendChild(brElement);
  }
}
