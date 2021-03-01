const names = ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"];

const People = () => (
    <ul className="list-group">
        {names.map((name, index) => (
            <li className="list-group-item" key={index}>{name}</li>
        ))}
    </ul>
)

export default People;