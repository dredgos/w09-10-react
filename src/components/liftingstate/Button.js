import { Component } from 'react';

class Button extends Component {

    constructor(props) {
        super(props);

        this.state = {
            clicked: 0,
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let {clicked} = this.state;
        clicked += 1;
        this.setState({clicked: clicked})

        let {handleUpdate} = this.props;
        handleUpdate(clicked);
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click Me!</button>
            </div>
        );
    }
}

export default Button;