let disabled = document.querySelectorAll(".disabled"); 
let popUp = document.getElementById("popUp"); 
let closeBtn = document.getElementById("close"); 
let main = document.getElementById("main"); 
let header = document.getElementById("header"); 


disabled.forEach(x => {
    x.addEventListener("click", function() {
        popUp.style.display = "block"; 
        main.classList.add("blur");
        header.classList.add("blur");
    })
});

closeBtn.addEventListener("click", function() {
    popUp.style.display = "none";
    main.classList.remove("blur");
    header.classList.remove("blur");
});