// Create a <TempConverter> component. It should have a °F and °C <input>. When you type a number into one <input> it should update the value in the other.

import { Component } from 'react'

class TempConverter extends Component {

    constructor(props){
        super(props);

        this.state = {
            celsius: 0,
            farenheight: 0,
        }

        this.handleFarChange = this.handleFarChange.bind(this);
        this.handleCelChange = this.handleCelChange.bind(this);
    }


    handleFarChange(e) {
        let convertF = (e.currentTarget.value - 32) / 1.8 
        this.setState({celsius: convertF.toFixed(2), farenheight: e.currentTarget.value});

    }

    handleCelChange(e){
        let convertC = (e.currentTarget.value * 1.8) + 32
        this.setState({farenheight: convertC.toFixed(2), celsius: e.currentTarget.value})
    }

    render(){

        return(
            <>
                <label htmlFor="farenheight">°F</label>
                <input value={this.state.farenheight} onChange={this.handleFarChange} id="farenheight" className="form-control" type="number"/><br></br>
                

                <label htmlFor="celsius">°C</label>                
                <input value={this.state.celsius} onChange={this.handleCelChange} className="form-control" type="number"/>
                
            </>
        )
    }
}

export default TempConverter