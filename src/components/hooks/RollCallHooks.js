import { useState } from 'react';

const RollCallHooks = ({ names }) => {

    let [index, setIndex] = useState(0);
    let handleClick = () => setIndex((index + 1) % names.length);


    return (
        <div>
            <p>{names[index]}</p>
            <button
                className="btn btn-primary mb-4"
                onClick={handleClick}
                >Next Name
            </button>
        </div>
    );
};

export default RollCallHooks;