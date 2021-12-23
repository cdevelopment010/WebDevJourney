


// function accordian 
function accordian(btn) {
    let caret = btn; 
    let updates = caret.parentElement.nextElementSibling; 
    caret.classList.toggle("rotateCaret"); 
    updates.classList.toggle("active"); 
}

