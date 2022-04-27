import React, { useState } from "react";

export default class TextArea extends React.Component {

    constructor(props) {
        super(props); 
        this.props = props; 
        this.state = {
            value: this.setInitialValue(this.props.id),
        };
        this.handleChange = this.handleChange.bind(this); 
        // saveLocalData = this.saveLocalData.bind(this); 
        this.localData = this.localData.bind(this); 
    }

    setInitialValue(id) {
        const localData = JSON.parse(localStorage.getItem('meal-plan')) || [];
        let index = localData.findIndex((item, index)=> {
            return item.id == id; 
        })
        let value = index < 0 ? '' : localData[index].str;  
        return value; 
    };

    localData(id, str)  {
        const local = JSON.parse(localStorage.getItem('meal-plan')) || []; 
        let curMeal = {id, str}; 
        let index = local.findIndex((item, index)=> {
            return item.id == id; 
        })
        if (index == -1) {
            //there isn't already local storage for this input; 
            local.push(curMeal); 
        } else {
            //update current local storage item
            local[index].str = str; 
        }

        localStorage.setItem('meal-plan', JSON.stringify(local));
    }

    handleChange(event) {
        event.persist(); 
        this.setState({value: event.target.value}, () => {
            this.localData(this.props.id, this.state.value); 
        }); 
    }

    render() {

        return (
            <textarea name="" id={this.props.id} cols="30" rows="10" onChange={this.handleChange} value={this.state.value}></textarea>
        )
    }
    

    
}