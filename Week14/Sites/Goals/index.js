// Assign variables

const career = document.getElementById("goal-career");
const health = document.getElementById("goal-health");
const wealth = document.getElementById("goal-wealth");
const relationships = document.getElementById("goal-relationships");
const education = document.getElementById("goal-education");
const header = document.getElementById("header"); 



// delay links for animation
    const aLink = document.getElementsByTagName("a");
    for (let i = 0; i < aLink.length; i ++) {
        // console.log(aLink[i].getAttribute("href"));
        aLink[i].addEventListener("click", function(e) {
            e.preventDefault(); 
            let url = this.href;
            setTimeout(function() {

                window.location.href = url;
              }, 2000);
        });
    }



// hover event listener

let arr = [[career, "blue"],[health,"purple"],[wealth, "green"],[relationships,"red"],[education,"powder-blue"]];

arr.forEach(x=> {
    x[0].addEventListener("mouseover", hoverState2.bind(null, x[0], x[1]));   
    x[0].addEventListener("mouseout", hoverState2.bind(null, x[0], x[1])); 
    x[0].addEventListener("click", animate.bind(null, x[0],x[1])); 
});


// functions

function animate(el, color){
    let newArr = [career, health, wealth, relationships, education].filter(x=> x != el); 
    hoverState2(el, color)

    el.parentElement.parentElement.classList.toggle("goals-hover-in");
    newArr.forEach(x => x.parentElement.parentElement.classList.toggle("goals-hover-out")); 
}

function hoverState2(el, color) {
    el.classList.toggle("bg-"+color); 
    el.classList.toggle("bg-gray"); 
    el.classList.toggle("text-coffee-100");
    document.body.classList.toggle("bg-"+color); 
    header.classList.toggle("text-gray-100");
    header.classList.toggle("text-coffee-100");
    
}

