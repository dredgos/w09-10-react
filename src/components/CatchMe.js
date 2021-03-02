import { Component } from 'react'

class CatchMe extends Component {

    constructor(props) {
        super(props)

        this.state={
            position: 0,
        }

        this.handleClick = this.handleClick.bind(this);
    }


    handleClick() {
        let {jump} = this.props;
        let current = this.state.position;
        this.setState({position: current += jump});
        
    }

    
    render() {
        
        let {position} = this.state;

        return( 
            <button onClick={this.handleClick} style={{transform: `translateY(${position}px)`}}>Catch Me</button>
        )

    }
}

export default CatchMe