import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.css'
import HomePage from './pages/home-page/HomePage'
import ExplorePage from './pages/explore-page/ExplorePage'
// Switch only render one route at once

const App = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path='/' component={ HomePage }/>
        <Route path='/explore' component= { ExplorePage } />
      </Switch>
    </Fragment>
  );
}

export default App;
