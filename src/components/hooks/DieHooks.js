import { useState } from 'react';


const DieHooks = ({sides}) => {

    let [number, setNumber] = useState(null);
    let handleClick = () => setNumber (
        Math.floor((Math.random() * sides) + 1)
    )


    let divStyle = {
        height: '100px',
        width: '100px',
        margin: '1rem',
        backgroundColor: 'red',
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center',
    }

    return (
    <div onClick={handleClick} style={divStyle}>
        <p style={{fontWeight: 'bold', fontSize: '2rem'}}>{number}</p>        
    </div>
    );
};

export default DieHooks;