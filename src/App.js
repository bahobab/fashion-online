import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect';

import SignInSignUpPage from './pages/sign-in-sign-up/SignInSignUpPage';
import Header from './components/header/Header.component';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/ShopPage';
import CheckoutPage from './pages/checkout/CheckoutPage';

import {auth, createUserProfileDocument, addCollectionsAndDocuments} from './firebase/firebase.utils';
import {selectCurrentUser} from './redux/user/user.select';
import {selectCollectionsForPreview} from './redux/shop/shop.selectors'

import setCurrentUser from './redux/user/user.action';

import './App.css';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser, collectionsArray} = this.props;
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
      setCurrentUser(userAuth);
      addCollectionsAndDocuments('collections', collectionsArray.map(({title, items}) => ({title, items})))
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

const mapStateToProps = createStructuredSelector({currentUser: selectCurrentUser, collectionsArray: selectCollectionsForPreview});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
