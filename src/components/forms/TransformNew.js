// Create a <Transform transform={ /* ...your function here... */ }> component. It should accept a function that takes a number and returns a number (e.g. a squaring function x => x * x or an increment function x => x + 1). The component should have an <input type="number"> and a <p>. When the user types into the <input> the <p> should output the result of running the number through the transform function. Try adding a few <Transform> components to your app with a different function for each one.

import { Component } from 'react'

class TransformNew extends Component {

    constructor(props){
        super(props)

        this.state = {
            input: ""
        }

        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(e) {
        this.setState({input: e.currentTarget.value})
    }

    render() {

        let {input} = this.state;
        let {transform} = this.props.transform;

        return(
            <>
                <input type="number" onChange={this.handleChange} className="form-control" value={input}/>
                <p className="lead">{transform(input)}</p>
            </>
        )
    }

}

export default TransformNew