// Create a <PasswordStrength> component. It should contain an <input> with the type password. The background styling should change depending on the length of the password:

// If it's empty the background shouldn't have styling.
// If it's less than 9 it should be red.
// If it's less than 16 it should be orange.
// If it's 16 or more then it should be green.

import { Component } from 'react'

class PasswordStrength extends Component {

    constructor(){
        super()
    
        this.state={
            input: '',
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let el = e.currentTarget;
        this.setState({input: el.value});
    }


    render() {
        
        let inputStyle = {
            backgroundColor: '',
        }

        if (this.state.input.length >= 16) {
            inputStyle.backgroundColor = 'green'
        }   
        if (this.state.input.length < 16) {
            inputStyle.backgroundColor = 'orange'
        }
        if (this.state.input.length < 9) {
            inputStyle.backgroundColor = 'red'
        }
        if (this.state.input.length === 0) {
            inputStyle.backgroundColor = ''
        }


        return(
            <>
                <input style={inputStyle} onChange={this.handleChange} className="form-control" type="password"></input>
            </>

        )
    }
}

export default PasswordStrength