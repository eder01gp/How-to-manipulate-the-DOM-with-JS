let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

let mySelectElement = document.getElementById("mySelect");
let stringCountries = '';
for (countrie of countries){
    let newOption = document.createElement("option");
    newOption.innerHTML=`${countrie}`
    mySelectElement.appendChild(newOption);
}

mySelectElement.addEventListener("change", function(){alert(mySelectElement.value)});