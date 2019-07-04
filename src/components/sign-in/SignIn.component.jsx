import React from 'react';

import FormIput from '../form-input/FormInput.component';
import CustomButton from '../custom-button/CustomButton.component';
import './SignIn.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email: '', password: ''});
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value});

    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password...</span>

                <form onSubmit={this.handleSubmit}>
                    <FormIput
                        name="email"
                        type="text"
                        label="email"
                        value={this.state.email}
                        required
                        handleChange={this.handleChange}/> {/* <label>Email</label> */}
                    <FormIput
                        name="password"
                        type="password"
                        label="password"
                        value={this.state.password}
                        required
                        handleChange={this.handleChange}/> {/* <label>Password</label> */}

                    <CustomButton type="submit">Sign In</CustomButton>

                </form>
            </div>
        );
    }
}

export default SignIn;