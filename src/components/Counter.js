import { Component } from 'react'

class Counter extends Component {

    constructor(props){
        super(props)

        let {initial} = this.props 
        
        this.state={
            counter: initial,
        };

        this.addCounter = this.addCounter.bind(this);
        this.subtractCounter = this.subtractCounter.bind(this);
    }

    addCounter() {
        let {max} = this.props;
        let current = this.state.counter;
        if (current < max) {
            this.setState({counter: current += 1})
        };
    }

    subtractCounter() {
        let current = this.state.counter;
        if (current > 0) {
            this.setState({counter: current -= 1})
        };
    }


    render() {

        return(
        <div>
            <p>{this.state.counter}</p>
            <button onClick={this.addCounter}>Add</button>
            <button onClick={this.subtractCounter}>Subtract</button>
        </div>
        )
    }
}

export default Counter