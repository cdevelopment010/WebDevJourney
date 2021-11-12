let currentDate = new Date(); 
let title = document.getElementById("title"); 
let listSection = document.getElementById("listSection"); 
let button = document.getElementById("button");

let listItem = document.getElementById("listItem");  


title.innerHTML = "To-do list for: " + currentDate.toDateString();

button.addEventListener("click", addItem); 
listItem.addEventListener("keydown", function(e) {
    if (e.code == 13 || e.key === "Enter" || e.keyCode === 13) {
       e.preventDefault();
    }
  });

listSection.addEventListener("click", function(event) {
    let len= this.getElementsByTagName("li").length;
    if (event.target.matches("li")) { 
        strikeOut(document.getElementById(event.target.id));
    }
})



// functions
function addItem(message) { 
    let listItem = document.getElementById("listItem");      
    let pos = listSection.getElementsByTagName("li").length; 
    let htmlString = `<li class="item" id="${pos}">${listItem.value}</li>`    
    listSection.insertAdjacentHTML("beforeend",htmlString);
    listItem.value = ""; 




}

function strikeOut(el) {
    el.style.textDecoration = "line-through"; 
}