import React from 'react';
import {connect} from 'react-redux';

import {auth} from '../../firebase/firebase.utils';
import FormIput from '../form-input/FormInput.component';
import CustomButton from '../custom-button/CustomButton.component';
import {googleSignInStart} from '../../redux/user/user.actions';

import './SignIn.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({email: '', password: ''});
        } catch (error) {
            console.log('Error login in with email and password', error.message)
        }

    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value});

    }

    render() {
        const {googleSignInStart} = this.props;
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
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart())
})

export default connect(null, mapDispatchToProps) (SignIn);