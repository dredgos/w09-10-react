import { Component } from 'react'

class Clicked extends Component {

    constructor(props) {
        super(props);

        this.state = {
            clicked: false,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let current = this.state.clicked;
        this.setState({clicked: !current});        
    }

    render () {
        let {clicked} = this.state;
        return(            
            <p className="lead" onClick={this.handleClick}>{clicked === false ? "Not Clicked" : "Clicked"}</p>
        )
    }

}

export default Clicked;