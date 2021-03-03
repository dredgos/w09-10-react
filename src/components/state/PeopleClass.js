import { Component } from 'react'

class PeopleClass extends Component {

    render () {
        let { names } = this.props;

        return(
            <ul className="list-group">
            {!names ? <li className="list-group-item">Nothing to see here</li> : names.map((value, index) => (
                <li className="list-group-item" key={index}>{value}</li>
            ))}
        </ul>
        )
    }
}

export default PeopleClass