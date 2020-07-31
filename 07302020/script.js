var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength(){
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value="";
}

function addListAfterClick() {
	if (inputLength () > 0){
	// if (input.value.length > 0) {
		createListElement();
		// ul.appendChild(li.appendChild(document.createTextNode("testing")));
	}
}

function addListAfterKeypress(event){
	if (inputLength () > 0 && event.which === 13) {
	createListElement();
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

// input.addEventListener("keypress", function(event) {
// 	// if (input.value.length > 0 && event.keyCode === 13) {
// 	if (inputLength () > 0 && event.which === 13) {
// 		createListElement();
// 		// ul.appendChild(li.appendChild(document.createTextNode("testing")));
// 	}
// })

// var button = document.getElementsByTagName("button")[0];
// var counter = 0;

// button.addEventListener("click", function() {
// 	console.log("Click!!!");
// 	counter = counter + 1;
// })