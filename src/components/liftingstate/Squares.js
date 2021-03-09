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

        let { colour } = this.props;
        return (
            <>
                <SquareState 
                    selected={ this.state.selected === 1 }
                    handleClick={ () => this.setState({ selected: 1 }) }
                    colour={ colour }/>
                <SquareState 
                    selected={ this.state.selected === 2 }
                    handleClick={ () => this.setState({ selected: 2 }) }
                    colour={ colour }/> 
            </>
            
        );
    }
}

export default Squares;

