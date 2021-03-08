import React, { Component } from 'react';
import Password from './Password';

class SignUp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            password: "",
            confirmpw: "",
        }


    }

    render() {

        let {password, confirmpw} = this.state;
        let {minLength} = this.props;
        let meetsCriteria = (password === confirmpw) && (password.length >= minLength);

        return (
            <div>                
                <form className="form-group">
                    <Password 
                        label="Password" 
                        handleChange={ (e) => this.setState({ password: e.currentTarget.value })}
                        check={meetsCriteria}
                        />
                    <Password 
                        label="Confirm Password" 
                        handleChange={ (e) => this.setState({ confirmpw: e.currentTarget.value })}
                        check={meetsCriteria}
                        />
                </form>
            </div>
        );
    }
}

export default SignUp;