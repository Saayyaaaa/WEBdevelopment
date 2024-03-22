const inputBox=document.getElementById("inputoutput-box");
const listPage=document.getElementById("list");

function addTask(){
    if(inputBox.value === ''){
        alert("You must white something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listPage.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listPage.addEventListener("click", function (e){
    if(e.target.tagName = "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
}, false);



function saveData(){
    localStorage.setItem("data", listPage.innerHTML);
}
function showTask(){
    listPage.innerHTML = localStorage.getItem("data");
}
showTask();