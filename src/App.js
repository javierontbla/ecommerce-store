import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom'

import HomePage from './pages/home-page/HomePage'
import Countries from './components/countries-component/Countries'
// Switch only render one route at once

const App = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path='/' component={ HomePage }/>
        <Route path='/newzeland' component= { Countries } />
      </Switch>
    </Fragment>
  );
}

export default App;
