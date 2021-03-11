import { useState } from 'react';



const ClickedHooks = () => {

    let [clicked, setClicked] = useState(false);
    let handleClick = () => setClicked(!clicked)

    return (
        <p className="lead" onClick={handleClick}>{clicked ? "Not Clicked" : "Clicked"}</p>
    );
};

export default ClickedHooks;