import { useReducer } from 'react';

const initialState = { counter: 0 };

const setAddStep = (state, {step, max}) => {
    let { counter } = state;
    return {...state, 
            counter: counter < max ? counter + step : counter,
        };
}

const setSubtractStep = (state, {step}) => {
    let { counter } = state;
    return {...state, 
            counter: counter > 0 ? counter - step : counter,
        };
}

const reducer = (state, action) => {
    switch(action.type) {
        case "ADDSTEP": return setAddStep(state, action);
        case "SUBTRACTSTEP": return setSubtractStep(state, action);
        default: return state;
    }
}


const StepCounterReducer = ({max, step}) => {

    const [state, dispatch ] = useReducer(reducer, initialState);
    const { counter } = state;

    return (
        <>
            <p>{counter}</p>
            <button 
                onClick={ () => dispatch({ type: "ADDSTEP", step: step, max: max })} 
                className="btn btn-primary mr-4 mb-4">+
            </button>
            <button 
                onClick={ () => dispatch({ type: "SUBTRACTSTEP", step: step })}
                className="btn btn-primary mb-4">-
            </button>
        </>
    );
};

export default StepCounterReducer;