let disabled = document.querySelectorAll(".disabled"); 
let popUp = document.getElementById("popUp"); 
let closeBtn = document.getElementById("close"); 
let main = document.getElementById("main"); 
let header = document.getElementById("header"); 
let footer = document.getElementById("footer"); 
let overlay = document.getElementById("overlay"); 


disabled.forEach(x => {
    x.addEventListener("click", function() {
        popUp.style.display = "block"; 
        main.classList.add("blur");
        header.classList.add("blur");
        footer.classList.add("blur");
        overlay.style.display = "block"; 
    })
});

closeBtn.addEventListener("click", closePopUp);
overlay.addEventListener("click", closePopUp);

function closePopUp() {
    if (popUp.style.display == "block") {
        popUp.style.display = "none";
        main.classList.remove("blur");
        header.classList.remove("blur");
        footer.classList.remove("blur");
        overlay.style.display = "none"; 
    }
}