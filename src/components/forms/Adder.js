// Create an <Adder> component. It should have a number <input> field and an "Add" <button>. When the "Add" button is pressed the number should be added to a list of numbers on screen and the total of all the numbers in the list should be displayed below. Make sure you test the total is correct: try 1, 2, and 3 and check you get 6

import { Component } from 'react'

class Adder extends Component {

    constructor(props){
        super(props)

        this.state = {
            input: "",
            total: 0,
            numList: [],
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleClick() {
        let {total, numList, input} = this.state;

        this.setState({numList: [...numList, input], total: total += +input, input: ""});
    }

    handleChange(e) {
        this.setState({input: e.currentTarget.value});
    }

    render() {
        let {total, numList, input} = this.state;
        return(
            <>
                <ul>
                    {numList.map((value, index) => (<li className="list-group-item" key={index}>{value}</li>
                    ))}
                </ul>
                <p>Total = {total}</p>
                <input onChange={this.handleChange} value={input} type="number" className="form-control"/>
                <button onClick={this.handleClick}>Add</button>
            </>
        )
    }

}

export default Adder