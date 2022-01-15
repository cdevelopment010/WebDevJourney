import express from 'express'; 

const app = express(); 
const port = 3000; 

let btnStyle = `padding: 10px; background-color: green; color: white; text-decoration: none; margin-top: 10px;`;
let containerStyle = `max-width: 400px; width: 100%; margin: 0 auto;`

let bill = 0;

let orders = {
    water: 0, 
    burger: 0, 
    fries: 0
}


// home
app.get("/", (req,res) => {

    if (orders.water == 0 && orders.burger == 0 && orders.fries == 0) {
        
        res.send(
            `
            <div style="${containerStyle}">
                <h1>Welcome</h1>
                <p>Hello, may I take your order?</p>
    
                <a href="/orderWater" style="${btnStyle}">Order Water</a>
                <a href="/orderBurger" style="${btnStyle}">Order Burger</a>
                <a href="/orderFries" style="${btnStyle}">Order Fries</a>
            </div>
            `
 
         )
    }

    else {
       

        res.send(
            `
            <div style="${containerStyle}">
                <h1>Welcome</h1>
                <p>Would you like anything else? Or just the bill?</p>

                <div style="display: flex; flex-wrap: wrap; gap: 20px; ">

                <a href="/orderWater" style="${btnStyle}">Order Water</a>
                <a href="/orderBurger" style="${btnStyle}">Order Burger</a>
                <a href="/orderFries" style="${btnStyle}">Order Fries</a>

                <a href="/getOrder" style="${btnStyle}">View current orders</a>
                </div>
                <div style="margin-top: 20px;">
                    <a href="/getBill" style="${btnStyle};background-color: purple; width: 100%">Just the bill please</a>
                </div>
            </div>

            `
        )
    }

    
    
}); 

// current bill
app.get("/getBill", (req, res) => {

    bill = orders.water * 1.99 + orders.burger * 6.99 + orders.fries * 3.99; 
    res.send(
        `
        <div style="${containerStyle}">
            <p><a href="/" style="${btnStyle}">Return to orders</a></p>
            Current Bill £${bill.toFixed(2)}.
            <ul>
            <li>Water = ${orders.water * 1.99}</li>
            <li>Burger = ${orders.burger * 6.99}</li>
            <li>Fries = ${orders.fries * 3.99}</li>
            </ul>
            ${bill > 0 ? `<a href="/payBill" style="${btnStyle}">Pay Bill</a>` : ''}
        </div>
          
        `
    )
})

// current orders 
app.get("/getOrder", (req, res)=> {

    
    res.send(
        `
        <div style="${containerStyle}">
            <p><a href="/" style="${btnStyle}">Return to orders</a></p>
            <p>current orders:
                <ul>
                    <li>Water: ${orders.water}</li>
                    <li>Burger: ${orders.burger}</li>
                    <li>Fries: ${orders.fries}</li>
                </ul>
            </p>
        </div>
        
        `
    )
})


// add water to the order
app.get("/orderWater", (req,res) => {
    orders.water++;
    res.send(
        `
        <div style="${containerStyle}">
            <p><a href="/" style="${btnStyle}">Return to orders</a></p>
            Water added to order. Total water(s) ${orders.water}
        </div>
        ` 
    )
})

// add burger to the order
app.get("/orderBurger", (req,res)=> {
    orders.burger++;
    res.send(
        `
        <div style="${containerStyle}">
        <p><a href="/" style="${btnStyle}">Return to orders</a></p>
        Burger added to order. Total burger(s) ${orders.burger}
        </div>
        ` 
    )
})

// add fries to the order
app.get("/orderFries", (req,res)=> {
    orders.fries++;
    res.send(
        `
        <div style="${containerStyle}">
        <p><a href="/" style="${btnStyle}">Return to orders</a></p>
        Fries added to order. Total fries(s) ${orders.fries}
        </div>
        ` 
    )
})

// pay the bill and reset it
app.get("/payBill", (req, res)=> {
    res.send(
        `
        <div style="${containerStyle}">
        <h2>The bill of £${bill.toFixed(2)} has been paid.</h2>
        
        <p><a href="/" style="${btnStyle}">New Order</a></p>
        </div<
        `
    )
    orders.water = 0; 
    orders.burger = 0; 
    orders.fries = 0; 
    
    bill = 0;
})


app.listen(port, () => {
    console.log(`Listening on port ${port}`); 
})