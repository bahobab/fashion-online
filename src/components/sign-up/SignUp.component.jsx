import React from "react";
import { connect } from "react-redux";

import { signUpStart } from "../../redux/user/user.actions";
import FormInput from "../form-input/FormInput.component";
import CustomButton from "../custom-button/CustomButton.component";

// import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./SignUp.styles.scss";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords dont match!!!");
      return;
    }

    this.props.onSignUpStart({ displayName, email, password });
    // const {user} = await auth.createUserWithEmailAndPassword(email, password);
    // await createUserProfileDocument(user, {displayName});
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with an email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={this.state.displayName}
            label="Display name"
            onChange={this.handleChange}
            required
          />
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            label="email"
            onChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            label="password"
            onChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={this.state.confirmPassword}
            label="confirm Password"
            onChange={this.handleChange}
            required
          />

          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSignUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(
  null,
  mapDispatchToProps
)(SignUp);
