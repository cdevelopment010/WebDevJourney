export default function PrintBtn() {

    const print = () => {
        // for each content put it in the hidden div, then the css will hide the textarea
        // and show the hidden div

        const textareas = document.querySelectorAll('textarea'); 
        const hiddenDivs = document.querySelectorAll('.hidden-until-print'); 

        textareas.forEach((textarea,key) => {
            hiddenDivs[key].innerText = textarea.value; 
        })

        window.print(); 
    }
    return(
         <button className="print-btn" onClick={print}>Print</button>
    )
}