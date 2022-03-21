let button = document.querySelector("#superDuperButton");

/* button.addEventListener("click", function() {
	let getbody = document.getElementsByTagName("body");
	let newDiv = document.createElement("div");
	let hello = document.createTextNode("Hello World");
	getbody[0].appendChild(newDiv);
	newDiv.appendChild(hello);
	newDiv.style.background = "yellow";
}); */ // FUNCIONA TAMBIEN

button.addEventListener("click", function() {
	let getbody = document.querySelector("body");
	let newDiv = document.createElement("div");
	newDiv.innerHTML = "Hello World";
	getbody.appendChild(newDiv);
	newDiv.style.background = "yellow";
});
