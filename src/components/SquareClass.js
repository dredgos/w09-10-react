import { Component } from 'react'

class SquareClass extends Component {

    constructor(props){
        super(props);
 
        this.state = {
            clicked: false,
        };
        
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        let current = this.state.clicked;
        this.setState({clicked: !current})
    }
    
    render() {
        
        let squareStyle = {
            height: '200px',
            width: '200px',
            margin: '1rem',
        }
        
        let {clicked} = this.state;
        let {colour} = this.props;
        
        return (
            <div style={{...squareStyle, backgroundColor: clicked === false ? "green" : colour}} onClick={this.handleClick}></div>
        );
    }


}





export default SquareClass;
