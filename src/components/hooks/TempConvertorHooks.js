import { useState } from 'react';

const TempConvertorHooks = () => {

    let [inputC, setInputC] = useState("");
    let handleChangeC = (e) => {
            setInputC(e.currentTarget.value);
            setInputF((e.currentTarget.value * 1.8) + 32);
        }


    let [inputF, setInputF] = useState("");
    let handleChangeF = (e) => {
            setInputF(e.currentTarget.value);
            setInputC((e.currentTarget.value - 32) * (5/9));
        }   

    return (
        <>
        <label htmlFor="celsius">°C</label>
        <input 
            value={inputC}
            onChange={handleChangeC} 
            id="celsius" 
            className="form-control mb-4" 
            type="number"
        />

        <label htmlFor="farenheight">°F</label>
        <input 
            value={inputF} 
            onChange={handleChangeF}
            id="farenheight" 
            className="form-control mb-4" 
            type="number"
        />
        

        
        
    </>
    );
};

export default TempConvertorHooks;