let mainImg = document.getElementById("woman-icon"); 
// let boxImg = document.getElementById("box-img"); 
let container = document.getElementById("container");

window.addEventListener("resize", resize); 
resize();
function resize() { 
    let size = window.innerWidth; 
     
    if (size < 1440) {
        // boxImg.classList.add("hidden"); 
    } 

    if (size >= 1440) {
        console.log(mainImg.clientHeight);
        console.log(mainImg.clientWidth);

        var divOffset = offset(container);
        console.log(divOffset);

        // boxImg.style.top = divOffset.top; 
        // boxImg.style.left = mainImg.getBoundingClientRect().left-100 + "px"; 
        // boxImg.classList.remove("hidden"); 
        
    }
}

function accordian(accord) {
    let btn = accord.getElementsByTagName("img")[0]; 
    let text = accord.getElementsByTagName("p")[0]; 
    let header = accord.getElementsByTagName("h4")[0]; 
    header.classList.toggle("focus"); 
    btn.classList.toggle("arrow-toggle"); 
    text.classList.toggle("hidden");  
}

// found on stackoverflow
function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}