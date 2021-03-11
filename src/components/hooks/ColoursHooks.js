import { useState } from 'react';

const ColoursHooks = ({colours}) => {

    let [index, setIndex] = useState(0);
    let handleClick = () => setIndex((index + 1) % colours.length);

    let divStyle = {
        backgroundColor: colours[index],
        height: 200,
        width: 200,
    };

    return (
        <div onClick={handleClick} style={divStyle}></div>
    );
};

export default ColoursHooks;