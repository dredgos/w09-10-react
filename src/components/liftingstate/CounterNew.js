const CounterNew = (value, handleAdd, handleSubtract) => {
    return (
        <div>
            <p>{value}</p>
            <button className="btn btn-primary" onclick={ handleAdd }>+</button>
            <button className="btn btn-primary" onlick={ handleSubtract }>-</button>
        </div>
    );
};

export default CounterNew;