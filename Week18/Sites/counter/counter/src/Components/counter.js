import react from "react";


class Counter extends react.Component {
    constructor(props) {
        super(props); 
        this.state = {
            counter: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);

    }

    increment() {
        this.setState({
            counter: this.state.counter+1
        })
    }

    decrement() {
        
        this.setState({
            counter: this.state.counter-1
        })

    }

    reset() {
        
        this.setState({
            counter: 0
        })

    }


    render() {

        let counterStyle = {color: 'white'};

        if (this.state.counter < 0) {
            counterStyle = {color: 'red'}
        }
        return(
            
            <div>
                <h1>Counter</h1>

                <div>
                    <h3 className="counter" id="counter" style={counterStyle}>{this.state.counter}</h3>
                    <div className="flex">
                        <button onClick={this.decrement}>Decrement</button>
                        <button onClick={this.increment}>Increment</button>
                        <button onClick={this.reset}>Reset</button>
                    </div>
                </div>
            </div>

            
            
            
        )
    }



}

export default Counter;