import React, { Component } from 'react';
import Password from './Password';

class SignUp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            password: "",
            confirmpw: "",
        }

        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeConfirm = this.handleChangeConfirm.bind(this);
    }

    handleChangePassword(e) {
        this.setState({ password: e.currentTarget.value })
    }

    handleChangeConfirm(e) {
        this.setState({ confirmpw: e.currentTarget.value })
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
                        handleChange={ this.handleChangePassword }
                        check={meetsCriteria}
                        />
                    <Password 
                        label="Confirm Password" 
                        handleChange={ this.handleChangeConfirm }
                        check={meetsCriteria}
                        />
                </form>
            </div>
        );
    }
}

export default SignUp;