import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Homepage from './components/pages/homepage/Homepage.component';
import ShopPage from './components/pages/shop/ShopPage.component';
// import CollectionPreview from
// './components/collection-preview/CollectionPreview.component';

import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route exact path='/shop' component={ShopPage}/>

    </Switch>
  );
}

export default App;

// K0t0k0li&Kodobi