import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.css'
import HomePage from './pages/home-page/HomePage'
import ExplorePage from './pages/explore-page/ExplorePage'
import NavBar from './components/navbar-component/NavBar'
import SignIn from './pages/sign-in-page/SignIn'
// Switch only render one route at once

const App = () => {
  return (
    <Fragment>
      <NavBar />
      <Switch>
        <Route exact path='/' component={ HomePage }/>
        <Route exact path='/explore' component= { ExplorePage } />
        <Route exact path='/signin' component= { SignIn } />
      </Switch>
    </Fragment>
  );
}

export default App;
