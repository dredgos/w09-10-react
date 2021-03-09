import { Link } from 'react-router-dom'

const Footer = () => (
    <footer>
        <ul className="list-group">
            <li className="list-group-item">
                <Link to="/">Home</Link>
            </li>
            <li className="list-group-item">
                <Link to="/components">Components Challenges</Link>
            </li>
            <li className="list-group-item">
                <Link to="/forms">Forms Challenges</Link>
            </li>
            <li className="list-group-item">
                <Link to="/state">State Challenges</Link>
            </li>
            <li className="list-group-item">
                <Link to="/lifecycle">Lifecycle Challenges</Link>
            </li>
            <li className="list-group-item">
                <Link to="/lifting-state">Lifting State and Passing Data Down Challenges</Link>
            </li>
        </ul>
    </footer>
    )
    
    export default Footer;