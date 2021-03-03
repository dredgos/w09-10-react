// Create a <Length> component. It should contain an <input> and tell you how many characters have been typed into the <input>.

import { Component } from 'react'

class Length extends Component {
    constructor(props){
        super(props)

        this.state = {
            input: "",
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let el = e.currentTarget;
        this.setState({input: el.value});
    }

    render(){

        return(
            <>
                <input onChange={this.handleChange} className="form-control"></input>
                <p className="form-text">Length: {this.state.input.length} characters</p>
            </>
        )
    }
}

export default Length