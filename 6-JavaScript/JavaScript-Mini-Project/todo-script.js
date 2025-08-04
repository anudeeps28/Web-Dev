let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

ul.addEventListener("click", function(event) {
    if (event.target.innerText === "Delete") {
        event.target.parentElement.remove();
    }
});

btn.addEventListener("click", function() {
    if (inp.value === "") {
        return;
    }
    let item = document.createElement("li");
    item.innerText = inp.value;
    
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    
    item.appendChild(deleteBtn);
    ul.appendChild(item);
    inp.value = "";
});