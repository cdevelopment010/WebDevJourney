let share = document.getElementsByClassName("share-icon"); 
let shareIcon = document.getElementsByClassName("fa-share"); 
let avatar = document.querySelector(".avatar"); 
let shareActive = document.querySelector(".share"); 
let shareSection = document.querySelector(".avatar-share"); 


for (let i = 0; i < share.length ; i++) { 
    share[i].addEventListener("click", activeStates)  
    
    }



function activeStates() {
    console.log("Button Clicked");

    this.classList.toggle("share-icon-clicked");
    avatar.classList.toggle("hidden"); 
    shareActive.classList.toggle("hidden"); 
    shareSection.classList.toggle("avatar-share-active")
}