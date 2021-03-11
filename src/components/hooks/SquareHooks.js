import { useState } from 'react';

const SquareHooks = ( {colour} ) => {

    let [clicked, setClicked] = useState(false);
    let handleClick = () => setClicked(!clicked)

    let divStyle={
        height: '200px',
        width: '200px',
        margin: '1rem',
    }
    return (
        <div 
            style={{...divStyle, backgroundColor: !clicked? 'green' : colour}} 
            onClick={handleClick}>            
        </div>
    );
};

export default SquareHooks;