import { useReducer } from 'react';

const initialState = { clicked: false };


const setClicked = state => {
    let { clicked } = state;
    return {...state, clicked: !clicked};
}

const reducer = (state, action) => {
    switch(action.type) { 
        case "CLICK": return setClicked(state);
        default: return state;
    }; 
}


const ClickedReducer = () => {

    const [ state, dispatch ] = useReducer(reducer, initialState);
    const { clicked } = state;

    return (
        <>
            <p className="lead" onClick={ () => dispatch({ type: "CLICK" })}>
                {!clicked ? 'Not Clicked' : ' Clicked'}
            </p>
        </>
    );
};

export default ClickedReducer;