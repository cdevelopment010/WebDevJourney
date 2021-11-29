let burgerBar = document.getElementById("burgerBar");
let nav = document.getElementById("nav");  
let navNavBar = document.getElementById("navNavBar");  

burgerBar.addEventListener("click", function() {
    this.classList.toggle("active"); 
    nav.classList.toggle("hidden"); 
})

