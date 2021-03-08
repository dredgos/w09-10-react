// Create a component <Max count={ numbers }> that you pass an array of numbers. For each number in the array it should display one of your <Counter> components from last week with that number as the initial value. The counter with the highest value should be highlighted.

import { Component } from 'react';
import Counter from '../state/Counter'

class Max extends Component {

    constructor(props) {
        super(props);

        this.state={
            values: [...props.count],
        }


    }



    render() {
        let {values} = this.state;
        
        return (
            <div>
                {values.map((value, index) => (
                    <Counter initial={value} key={index} /> 
                ))}
            </div>
        );
    }
}

export default Max;