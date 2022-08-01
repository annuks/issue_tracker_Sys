// js function for filteration from database
let author = "";
let search = "";
let labels = [];

function filterInputChange(){
    let authorInput = document.getElementById("author-filter");
    let searchInput = document.getElementById("search-filter");
   author = authorInput.value;
   search = searchInput.value;
}

function filterLabels(label,id){
    labels.push(label);

    let spanLabelContainer = document.getElementById("filter-label-spans");
    let span = `<span>${label}</span>`
    spanLabelContainer.innerHTML += span;
    filterFromDB(id);
}

//function for accessing data dynamically from database
function filterFromDB(id){
    $.ajax({
        type: 'post',
        data:{
            author,
            search,
            labels:labels,
        },

        url : `/projects/filter/${id}`,
        success:function(data){
            console.log(data);

            showDatatoHtml(data.data.issues)
        },
        error: function(error){
            console.log(error);   
        }
    })
}

// function for showing data on page after filteration
function showDatatoHtml(issues){
    let issuescontainer = document.getElementById('issues-list');
    issuescontainer.innerHTML = '';
    for(let i = issues.length-1 ; i >= 0 ; i--){
        let index = i + 1;
        let spans = '';
        for(label of issues[i].labels){
            let span = `<span>${label}</span>`;
            spans += span;
        }

        let issueBox = ` <div class="issue-box">
                        <div class="issue-title">
                            <a href="/issues/delete/${issues[i]._id}" class="btn btn-outline-danger float-end btn-xs btn-sm"><i class="fa-solid fa-trash"></i></a>
                            ${index}. ${issues[i].issueTitle }
                            <span class="labels">
                                ${spans}
                            </span>
                        </div>
                        <div class="description">
                            ${issues[i].description }
                            
                        </div>

                        <div class="author"><span>Author : </span> ${issues[i].author }</div>
                    </div>`
        issuescontainer.innerHTML += issueBox;
    }

}