

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



function addNewLabel(id){
    let ul = document.getElementById("label-group");
    let labelHtml = `<li><a href="#" onclick="addLabelToSpan('${label}','${id}')" class="dropdown-item">${label}</a></li>`
    ul.innerHTML = labelHtml + ul.innerHTML;


    $.ajax({
        type: 'get',
        url : `/projects/add/labels/${id}/${label}`,
        success:function(data){
            console.log(data);
        },
        error: function(error){
            console.log(error);   
        }
    })
    label="";
    document.getElementById("label-issue").value = '';

}

function addLabelToSpan(value){
    let spandiv = document.getElementById("label-span");
    let labelCheckBox = document.getElementById("label-input-checkbox");

    let spanHtml = `<span>${value}</span>`
    spandiv.innerHTML += spanHtml;


    let checkbox = `<input type="checkbox" value="${value}" name="labels" checked hidden>`;
    labelCheckBox.innerHTML += checkbox;


}