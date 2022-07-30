// js for closing form
let label;
function closeForm(){
    document.getElementById("form-container").style.height = "0";
    document.getElementById("form-container").style.width = "0";
}

function newLabel(){
    let input = document.getElementById("label-issue");
    label = input.value;
}



function addNewLabel(){
    let ul = document.getElementById("label-group");
    let labelHtml = `<li><a href="#" onclick="addLabelToSpan('${label}')" class="dropdown-item">${label}</a></li>`
    ul.innerHTML = labelHtml + ul.innerHTML;
}

function addLabelToSpan(value){
    let spandiv = document.getElementById("label-span");
    let labelCheckBox = document.getElementById("label-input-checkbox");

    let spanHtml = `<span>${value}</span>`
    spandiv.innerHTML += spanHtml;


    let checkbox = `<input type="checkbox" value="${label}" name="labels" checked hidden>`;
    labelCheckBox.innerHTML += checkbox;
}