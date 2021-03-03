import { Component } from 'react'

class RollCall extends Component {

    constructor(props){
        super(props);

        this.state = {
            index: 0,
        }
    
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick() {
        let {names} = this.props; 
        let {index} = this.state;               
        this.setState({
            index: (index + 1) % names.length,
        });
    }
    
    render() {     
        let {names} = this.props;
        let {index} = this.state;   

        return(
            <div>
                <p>{names[index]}</p>
                <button onClick={this.handleClick}>Next Name</button>
            </div>
        )
    }

}

export default RollCall