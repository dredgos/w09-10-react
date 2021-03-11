import { useState } from 'react';

const StepCounterHooks = ({max, step}) => {

    let [counter, setCounter] = useState(0);
    let addStep = () => setCounter(counter + (counter < max ? step : 0)); 
    let subtractStep = () => setCounter(counter - (counter > 0 ? step : 0)); 

    return (
        <>
            <p>{counter}</p>
            <button className="btn btn-primary mr-4 mb-4" onClick={addStep}>+</button>
            <button className="btn btn-primary mb-4" onClick={subtractStep}>-</button>
        </>
    );
};

export default StepCounterHooks;