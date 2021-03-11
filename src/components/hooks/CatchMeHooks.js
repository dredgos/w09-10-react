import { useState } from 'react';

const CatchMeHooks = ({ jump }) => {

    let [position, setPosition] = useState(0);
    let handleClick = () => setPosition(position + jump) 

    return (
        <>
            <button 
                className="btn btn-primary mb-4"
                onClick={handleClick} 
                style={{
                    position: 'relative',
                    top: position,
                    // transform: `translateY(${position}px)`,
                    zIndex: 2,
                }}
            >Catch Me
            </button>
        </>
    );
};

export default CatchMeHooks;