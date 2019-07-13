import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import SignInSignUpPage from './pages/sign-in-sign-up/SignInSignUpPage';
import Header from './components/header/Header.component';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/ShopPage';
import CheckoutPage from './pages/checkout/CheckoutPage';

// import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {selectCurrentUser} from './redux/user/user.select';
import {checkUserSession} from './redux/user/user.actions';

import './App.css';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {checkUserSession} = this.props;
    checkUserSession();
    
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
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/checkout' component={CheckoutPage}/>
          <Route
            exact
            path='/signin'
            render={(() => this.props.currentUser
            ? (<Redirect to='/'/>)
            : (<SignInSignUpPage/>))}/>
        </Switch>
      </div>
    );
  }
}

// const mapStateToProps = ({user}) => ({currentUser: user.currentUser});

const mapStateToProps = createStructuredSelector({currentUser: selectCurrentUser});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
