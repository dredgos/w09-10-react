import { Component } from 'react';
import SquareState from './SquareState'



class Squares extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selected: 1,
        }
    }


    render() {
        return (
            <>
                <SquareState 
                    selected={ this.state.selected === 1}
                    handleClick={ () => this.setState({ selected: 1 }) }
                    colour="hotpink"/>
                <SquareState 
                    selected={ this.state.selected === 2}
                    handleClick={ () => this.setState({ selected: 2 }) }
                    colour="hotpink"/> 
            </>
            
        );
    }
}

export default Squares;

