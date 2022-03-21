let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	let newLi = document.createElement("li");
	let myUl = document.getElementById("myList");
	myUl.appendChild(newLi);
});
