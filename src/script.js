itens = document.querySelectorAll(".nav_item");

let itemPadrao = document.querySelector("#click_1 .nav_item");
itemPadrao.style.backgroundColor = "rgb(40, 60, 70)";
itemPadrao.style.border = "2px solid rgb(63, 133, 167)";

for (let item of itens) {
    item.addEventListener("click", function() {

        itens.forEach(i => {
            i.style.backgroundColor = ""; 
            i.style.border = "2px solid transparent"; 
        });
        
        item.style.backgroundColor = "rgb(40, 60, 70)";
        item.style.border = "2px solid rgb(63, 133, 167)";
    });
}
function comecar(){
    let button = window.document.querySelector(`.progress-ring button`)

    button.style.borderBottom = "4px solid rgb(49, 112, 0)"
}
function out(){
    let button = window.document.querySelector(`.progress-ring button`)

    button.style.borderBottom = "7px solid rgb(49, 112, 0)"
}
