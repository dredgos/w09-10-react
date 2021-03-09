// Create a component <Max count={ numbers }> that you pass an array of numbers. For each number in the array it should display one of your <Counter> components from last week with that number as the initial value. The counter with the highest value should be highlighted.

import { Component } from 'react';
import CounterNew from './CounterNew'

class Max extends Component {

    constructor(props) {
        super(props);

        this.state={
            values: [...props.count],
        }


    }

    handleAdd() {
        
    }


    render() {
        let {values} = this.state;
        
        return (
            <div>
                {values.map((value, index) => (
                    <CounterNew
                        initial={value} 
                        key={index} 
                        handleAdd={ () => this.setState({values: value += 1}) } 
                        handleSubtract={ () => this.setState({values: value -= 1}) }
                    /> 
                ))}
            </div>
        );
    }
}

export default Max;