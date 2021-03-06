import { Component } from 'react'

class ToggleText extends Component {

    constructor(props) {
        super(props)

        this.state={
            clicked: false,
        };
        
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let current = this.state.clicked;
        this.setState({clicked: !current})
    }

    render() {
        let {clicked} = this.state;
        let {initial, alternate} = this.props

        return(
            <>
                <p>{!clicked ? initial : alternate}</p>
                <button onClick={this.handleClick}>Toggle</button>
            </>
        )
    }
}

export default ToggleText