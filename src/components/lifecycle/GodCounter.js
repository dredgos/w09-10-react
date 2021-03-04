// Create a component <GodCounter /> that when you click anywhere in the browser window increments a counter by 1. Make sure that you remove the event handler in componentWillUnmount!

import { Component } from 'react'

class GodCounter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            counter: 0,
        }

        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        window.addEventListener("click", this.handleClick)
    }

    componentWillUnmount() {
        window.removeEventListener("click", this.handleClick)
    }


    handleClick() {
        let current = this.state.counter;
        this.setState({counter: current += 1})
    }

    render() {
        let { counter } = this.state;
        return (
            <>
                <p>{counter}</p>
            </>
        )
    }
}

export default GodCounter

