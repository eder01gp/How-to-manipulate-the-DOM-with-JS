let myListEl = document.getElementsByTagName("ul")[0];// array
let inputEl = document.getElementById("addToDo");
inputEl.addEventListener("change",function(){
        let newLi = document.createElement("li");
        newLi.innerHTML= `<span><i class="fa fa-trash"></i></span>${inputEl.value}`
        myListEl.appendChild(newLi);
        createDeleteTasks();
});

let createDeleteTasks = () => { 
    let mySpans = document.querySelectorAll("span");
    mySpans.forEach(Span => Span.addEventListener('click', function(){  
        Span.parentNode.remove()}));
}

