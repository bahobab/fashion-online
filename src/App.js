import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import SignInSignUpPage from './pages/sign-in-sign-up/SignInSignUpPage';
import Header from './components/header/Header.component';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/ShopPage';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

import setCurrentUser from './redux/user/user.action';

import './App.css';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unsubcribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      // else { }
      setCurrentUser(userAuth)
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route exact path='/signin' component={SignInSignUpPage}/>
          <Route exact path='/shop' component={ShopPage}/>
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
