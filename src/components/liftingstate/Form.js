import { Component } from 'react';

class Form extends Component {

    constructor(props) {
        super(props);

        this.state={
            name: "",
            email: "",
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);

    }


    handleClick() {
        this.setState({name: "", email: ""});
        let {handleSubmit} = this.props;
        handleSubmit({...this.state});
    }

    handleName(e) {
        this.setState({name: e.currentTarget.value});
    }

    handleEmail(e) {
        this.setState({email: e.currentTarget.value});
    }

    render() {
        return (
            <>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                        onChange={this.handleName}
                        className="form-control" 
                        id="name" 
                        name="name" 
                        type="text" 
                        value={this.state.name}
                    />
                    <label htmlFor="name">Email</label>
                    <input 
                        onChange={this.handleEmail} 
                        className="form-control" 
                        id="email"
                        name="email" 
                        type="email"
                        value={this.state.email}                        
                    />
                    <input 
                        onClick={this.handleClick} 
                        type="submit" 
                        className="btn btn-primary">                        
                    </input>
                </div>

            </>
        );
    }
}

export default Form;