import React, { useState } from "react";
import TextArea from "./TextArea";

export default function Day(props) {

        if (window.innerWidth < 768)  {
            return (
                <div className = {`day ${props.day.toLowerCase()}`}>
                    <h3>{props.day}</h3>
                    {/* Add a click to go to new page? */}
                </div>
            )
        } else {
            return (
                <div className = "day-block">
                    <h3 className = {`day ${props.day.toLowerCase()}`} >{props.day}</h3>
                    {/* <textarea name="" id={`breakfast-${props.day.toLowerCase()}`} cols="30" rows="10" onChange={handleInput.bind(this)}></textarea> */}
                    <TextArea id={`breakfast-${props.day.toLowerCase()}`} />
                    <TextArea id={`lunch-${props.day.toLowerCase()}`} />
                    <TextArea id={`dinner-${props.day.toLowerCase()}`} />
                    <TextArea id={`snacks-${props.day.toLowerCase()}`} />
                    {/* <textarea name="" id={`lunch-${props.day.toLowerCase()}`} cols="30" rows="10"></textarea> */}
                    <div className="hidden-until-print"></div>
                    <div className="hidden-until-print"></div>
                    <div className="hidden-until-print"></div>
                    <div className="hidden-until-print"></div>
                
                </div>
            )
        }

        

}