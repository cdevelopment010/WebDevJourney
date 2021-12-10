let burger = document.getElementById("burger"); 
let menuItems = document.getElementById("menu-items"); 
let dropDown1 = document.getElementById("dropDown1"); 
let dropDown2 = document.getElementById("dropDown2"); 
let dropDown3 = document.getElementById("dropDown3"); 


burger.addEventListener("click", burgerBar); 


//bit of a bodge
//if burger has isn't visible, don't run even listeners
if (window.getComputedStyle(burger).display !== "none") {
    [dropDown1, dropDown2, dropDown3].forEach(x => {
        x.addEventListener("click", function() {
            let icon = this.getElementsByTagName("i")[0]; 
            let subMenu = this.getElementsByTagName("ul")[0];
            subMenu.classList.toggle("hidden");  
            icon.classList.toggle("activeIcon"); 
        })
    })
    
}


// functions

function burgerBar() {
    burger.classList.toggle("active"); 
    menuItems.classList.toggle("hidden"); 

    if (burger.classList.contains("active")) {
        [dropDown1, dropDown2, dropDown3].forEach(x => { 
            let icon = x.getElementsByTagName("i")[0]; 
            let subMenu = x.getElementsByTagName("ul")[0]; 
            subMenu.classList.add("hidden"); 
            icon.classList.remove("activeIcon"); 
            
        })
    }
}

