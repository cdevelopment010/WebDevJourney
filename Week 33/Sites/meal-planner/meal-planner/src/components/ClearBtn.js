export default function ClearBtn({ str }) {
    // Remove local storage

   

    const clearData = () => {
        console.log(str);
        localStorage.removeItem(str);
        window.location.reload(false); 
    }
    return(
         <button className="clear-btn" onClick={clearData}>Clear Data</button>
    )

}