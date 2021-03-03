import { Component } from 'react'

class Colours extends Component {
    constructor(props) {
        super(props)

        this.state = {
            index: 0,
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        const { index } = this.state;
        const { colours } = this.props;
        this.setState({
            index: (index + 1) % colours.length,
        });
    }

    render() {

        const { colours } = this.props;
        const { index } = this.state;

        let divStyle = {
            backgroundColor: colours[index],
            height: 200,
            width: 200,
        };

        return(
            <div onClick={this.handleClick} style={divStyle}></div>
        )
    }
}

export default Colours