import Navigation from "./Navigation"
import PrintBtn from "./components/PrintBtn"
import AddRow from "./components/AddRow"
import ClearBtn from "./components/ClearBtn";
import ShoppingListItem from "./components/ShopingListItem";
import { useState } from "react";
export default function ShoppingList() {
    // let arr = Array.from(Array(40).keys()); 
    
    const [items, setItems] = useState(Array.from(Array(40).keys())); 
    const increaseItems = () => {
        setItems(Array.from(Array(items.length+1).keys())); 
    }


    return (
        <div className="shopping-list-page">
            <Navigation />
            <h1>Shopping List</h1>
            {/* <AddRow /> */}
            <button type="button" onClick={increaseItems}>Add</button>
            <div>
                <ul id="list">
                    {items.map((el, index) => {
                        return <li key={index}><ShoppingListItem id = {`item-${index}`}/></li>
                    })}
                </ul>
            </div>
            <div className="btn-group">
                <PrintBtn />
                <ClearBtn str="shopping-list" />
            </div>
        </div>
    )
}