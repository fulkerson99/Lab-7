function init() {


	var message = document.getElementById("entryinput");
	var button = document.getElementById("entrybutton");

	button.addEventListener("click", function () {
		alert("Joe Fulkerson: " + message.value);
		document.getElementById("textoutput").innerHTML = message.value
	});


}

window.addEventListener('load', init);