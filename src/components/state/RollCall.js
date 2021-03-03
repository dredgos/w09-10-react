import { Component } from 'react'

class RollCall extends Component {

    constructor(props){
        super(props);

        this.state = {
            currentName: [],
        }
    
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick() {
        let {names} = this.props;                
        
    }
    
    render() {        

        return(
            <div>
                <p>{this.state.currentName}</p>
                <button onClick={this.handleClick}>Next Name</button>
            </div>
        )
    }

}

export default RollCall