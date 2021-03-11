import { useState } from 'react';

const ListHooks = () => {

    let [input, setInput] = useState("");
    let handleChange = (e) => setInput(e.currentTarget.value)

    let [list, setList] = useState([]);
    let handleClick = () => {
            setList([...list, input]);
            setInput("");
        }

    return (
        <>
            <ul>
                {list.map((value, index) => (<li className="list-group-item" key={index}>{value}</li>
                    ))}
            </ul>
            <input 
                value={input}
                onChange={handleChange}
                className="form-control mb-4"
            />
            <button onClick={handleClick} className="btn btn-primary mb-4">Add</button>
        </>
    );
};

export default ListHooks;