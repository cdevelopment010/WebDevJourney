import React from "react";
import Navigation from "./Navigation"
import Day from "./components/Day";
import PrintBtn from "./components/PrintBtn";
import Label from "./components/Label";
import ClearBtn from "./components/ClearBtn";

export default class MealPlanner extends React.Component {

    constructor(props) {
        super(props); 
    }

    render() {


        let mobile = window.innerWidth < 768 ? true : false;
        // console.log(mobile); 

        return (
            <div className="landscape-page">
                <Navigation />
                <h1>Meal Planner</h1>
    
                <div className="day-container">
                    <Label />
                    <Day day="Mon"/>
                    <Day day="Tue"/>
                    <Day day="Wed"/>
                    <Day day="Thu"/>
                    <Day day="Fri"/>
                    <Day day="Sat"/>
                    <Day day="Sun"/>
                </div>

                <div className="btn-group">
                    <PrintBtn />
                    <ClearBtn str="meal-plan" />
                </div>
            </div>
        )
    }
} 