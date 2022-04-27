import React from "react";
export default class ShoppingListItem extends React.Component {

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
        const localData = JSON.parse(localStorage.getItem('shopping-list')) || [];
        let index = localData.findIndex((item, index)=> {
            return item.id == id; 
        })
        let value = index < 0 ? '' : localData[index].str;  
        return value; 
    };

    localData(id, str)  {
        const local = JSON.parse(localStorage.getItem('shopping-list')) || []; 
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

        localStorage.setItem('shopping-list', JSON.stringify(local));
    }

    handleChange(event) {
        event.persist(); 
        this.setState({value: event.target.value}, () => {
            this.localData(this.props.id, this.state.value); 
        }); 
    }

    render() {

        return (
            <input id={this.props.id} type='text' onChange={this.handleChange} value={this.state.value} />
        )
    }
    

    
}