import React, { Fragment, Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/home-page/HomePage";
import ExplorePage from "./pages/explore-page/ExplorePage";
import NavBar from "./components/navbar-component/NavBar";
import SignIn from "./pages/sign-in-page/SignIn";
import { auth } from "./Firebase/Firebase";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <Fragment>
        <NavBar currentUser={this.state.currentUser} />
        {/*Switch only render one route at once*/}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/explore" component={ExplorePage} />
          <Route exact path="/signin" component={SignIn} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
