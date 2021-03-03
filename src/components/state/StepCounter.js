import { Component } from 'react'

class StepCounter extends Component {

    constructor(props){
        super(props)

        this.state={
            stepCount: 0,
        };

        this.addStep = this.addStep.bind(this);
        this.subtractStep = this.subtractStep.bind(this);

    }

    addStep(){
        let {step, max} = this.props;
        let current = this.state.stepCount;
        if (current < max) {
            this.setState({stepCount: current += step});
        }

    }

    subtractStep() {
        let {step} = this.props;
        let current = this.state.stepCount
        if (current > 0) {
            this.setState({stepCount: current -= step})
        }
    }

    render() {

        return(
            <div>
                <p>{this.state.stepCount}</p>
                <button onClick={this.addStep}>+</button>
                <button onClick={this.subtractStep}>-</button>
            </div>
        )
    }


}

export default StepCounter