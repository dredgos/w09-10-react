// Create a <List> component that consists of a <ul>, an <input>, and a <button>Add</button>. When you click the "Add" button, whatever is in the <input> should get added to the <ul>.

import { Component } from 'react'

class List extends Component {
    constructor(){
        super()

        this.state = {
           input: "",
           list: [],
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(){
        let {list, input} = this.state;

        this.setState({list: [...list, input], input: ""});        
    }

    handleChange(e){
        this.setState({input: e.currentTarget.value});
    }


    render() {

        let {list, input} = this.state;
        return(
            <>
                <ul>
                    {list.map((value, index) => (<li className="list-group-item" key={index}>{value}</li>
                    ))}
                </ul>
                <input value={input} onChange={this.handleChange} className="form-control" />
                <button onClick={this.handleClick}>Add</button>
            </>
        )
    }
}

export default List