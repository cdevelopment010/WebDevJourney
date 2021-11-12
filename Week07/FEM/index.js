let share = document.getElementsByClassName("share-icon");
let shareIcon = document.getElementsByClassName("fa-share"); 
// let avatar = document.getElementById("avatar"); 
let avatar = document.querySelector(".profile"); 
let shareActive = document.querySelector(".share"); 
let nameArea = document.querySelector(".name"); 
let shareSection = document.querySelector(".avatar-share"); 


for (let i = 0; i < share.length ; i++) { 
    share[i].addEventListener("click", activeStates)  
        
    }



// Get position of share button to do position fixed of share active stata



function activeStates() {
    console.log("Button Clicked");

    this.classList.toggle("share-icon-clicked");
    shareActive.classList.toggle("hidden"); 
    shareActive.classList.toggle("hidden-lg"); 
    avatar.classList.toggle("hidden"); 
    nameArea.classList.toggle("hidden");
    shareSection.classList.toggle("avatar-share-active")

    // Get position of share icon to offset fixed position

    if (window.innerWidth >= 1439) {
        var divOffset = offset(document.getElementById("share-icon"));
        console.log(divOffset.left, divOffset.top);
        shareActive.style.left = (divOffset.left - 130)  + "px"; // 130 = width of element / 2
        shareActive.style.top = (divOffset.top - 100) + "px"; 

    } else {
        shareActive.style.left = "-60vw";
        shareActive.style.top  = 0;
    }

}

// found on stackoverflow
function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}



