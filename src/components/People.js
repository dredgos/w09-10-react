// const names = ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"];

const People = ( {names}) => (
    
    <ul className="list-group">
        {!names ? <li className="list-group-item">Nothing to see here</li> : names.map((value, index) => (
            <li className="list-group-item" key={index}>{value}</li>
        ))}
    </ul>
    
)



export default People;