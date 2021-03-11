import { useState } from 'react';

const ToggleTextHooks = ( {initial, alternate} ) => {

    let [clicked, setClicked] = useState(false);
    let handleClick = () => setClicked(!clicked);

    return (
        <>
            <p>{!clicked ? initial : alternate}</p> 
            <button 
                onClick={handleClick}
                className="btn btn-primary mb-4"
            >Toggle                
            </button>
        </>
    );
};

export default ToggleTextHooks;