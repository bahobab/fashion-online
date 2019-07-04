import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Homepage from './components/pages/homepage/Homepage.component';
import './App.css';

const HatsPage = (props) => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route exact path='/shop/hats' component={HatsPage}/>
    </Switch>
  );
}

export default App;

// K0t0k0li&Kodobi