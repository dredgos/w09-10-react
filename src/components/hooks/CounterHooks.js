import { useState } from 'react';

const CounterHooks = ({initial, max}) => {

    let [counter, setCounter] = useState(initial);
    let handleAdd = () => setCounter(counter + (counter < max ? 1 : 0)); 
    let handleSubtract = () => setCounter(counter - (counter > 0 ? 1 : 0)); 

    return (
        <>
            <p>{counter}</p>
            <button className="btn btn-primary mr-4 mb-4" onClick={handleAdd}>+</button>
            <button className="btn btn-primary mb-4" onClick={handleSubtract}>-</button>
        </>
    );
};

export default CounterHooks;