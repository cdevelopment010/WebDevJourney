let burger = document.getElementById("burger"); 
let nav = document.getElementById("nav"); 


burger.addEventListener("click", function() {
    this.classList.toggle("active"); 
    nav.classList.toggle("hidden-nav"); 

})