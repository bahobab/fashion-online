import React from 'react';
import {Route, Switch} from 'react-router-dom';

import SignInSignUpPage from './pages/sign-in-sign-up/SignInSignUpPage';
import Header from './components/header/Heder.component';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/ShopPage';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

// import CollectionPreview from
// './components/collection-preview/CollectionPreview.component';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
  }

  unsubcribeFromAuth = null;

  componentDidMount() {
    this.unsubcribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({currentUser: user}) console.log(user);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          // console.log(snapShot.data);
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        });
      } else {
        this.setState({currentUser: userAuth})
      }
    });
  }

  componentWillUnmount() {
    this.unsubcribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route exact path='/signin' component={SignInSignUpPage}/>
          <Route exact path='/shop' component={ShopPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
