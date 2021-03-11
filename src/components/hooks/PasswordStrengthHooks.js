import { useState } from 'react';

const PasswordStrengthHooks = () => {

    let [input, setInput] = useState("")
    let handleChange = (e) => setInput(e.currentTarget.value);

    let inputStyle = {
        backgroundColor: '',
    }

    if (input.length >= 16) {
        inputStyle.backgroundColor = 'green'
    }   
    if (input.length < 16) {
        inputStyle.backgroundColor = 'orange'
    }
    if (input.length < 9) {
        inputStyle.backgroundColor = 'red'
    }
    if (input.length === 0) {
        inputStyle.backgroundColor = ''
    }
    
    return (
        <>
            <label htmlFor="password">Password</label>
            <input 
                id="password" 
                name ="password" 
                type="password"
                style={inputStyle} 
                onChange={handleChange}
                value={input} 
                className="form-control" 
            />
        </>
    );
};

export default PasswordStrengthHooks;