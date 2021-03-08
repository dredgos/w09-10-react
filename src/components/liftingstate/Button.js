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
        this.setState({clicked: clicked += 1})

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