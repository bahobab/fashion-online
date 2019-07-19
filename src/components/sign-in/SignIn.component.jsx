import React, { useState } from "react";
import { connect } from "react-redux";

// import {auth} from '../../firebase/firebase.utils';
import FormIput from "../form-input/FormInput.component";
import CustomButton from "../custom-button/CustomButton.component";
import {
  googleSignInStart,
  emailSignInStart
} from "../../redux/user/user.actions";

import "./SignIn.styles.scss";

// class SignIn extends React.Component {
const SignIn = ({ googleSignInStart, emailSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: ""
  });

  const { email, password } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();

    emailSignInStart({ email, password });

    // try {
    //     await auth.signInWithEmailAndPassword(email, password)
    //     this.setState({email: '', password: ''});
    // } catch (error) {
    //     console.log('Error login in with email and password', error.message)
    // }
  };

  const handleChange = event => {
    const { value, name } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password...</span>

      <form onSubmit={handleSubmit}>
        <FormIput
          name="email"
          type="text"
          label="email"
          value={email}
          required
          handleChange={handleChange}
        />{" "}
        {/* <label>Email</label> */}
        <FormIput
          name="password"
          type="password"
          label="password"
          value={password}
          required
          handleChange={handleChange}
        />{" "}
        {/* <label>Password</label> */}
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart(email, password))
});

export default connect(
  null,
  mapDispatchToProps
)(SignIn);
