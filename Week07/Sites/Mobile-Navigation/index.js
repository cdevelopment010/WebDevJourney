let burger = document.getElementById("burger"); 
let navbar = document.getElementById("navbar"); 
let header = document.getElementById("header"); 


burger.addEventListener("click", function() {
    this.classList.toggle("change"); 
    navbar.classList.toggle("hide"); 
})


// remove burger icon on larger screens

// window.addEventListener("resize", function(){
//     if (window.innerWidth > 768) { 
//         burger.classList.add("hide");
//         navbar.classList.remove("hide");

//     } else { 
//         burger.classList.remove("hide");
//         navbar.classList.add("hide");
//     }
// })


// change header background on scroll 
// window.addEventListener("scroll", function() {
//     if (window.scrollY > 0 ) {
//         header.style.backgroundColor = "yellow"; 
//     } else {
//         header.style.backgroundColor = "white";
//     }
    
// })