import React, { Fragment, Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./App.css";
import HomePage from "./pages/home-page/HomePage";
import ExplorePage from "./pages/explore-page/ExplorePage";
import NavBar from "./components/navbar-component/NavBar";
import SignIn from "./pages/sign-in-page/SignIn";
import CheckOut from "./pages/checkout-page/CheckOut";
import { auth, createUserProfileDoc } from "./Firebase/Firebase";
import { userAction } from "./redux/user-actions";
import { selectActiveUser } from "./redux/selectors";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { userAction } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      // if user exists
      if (user) {
        const userRef = await createUserProfileDoc(user);

        userRef.onSnapshot((snapShot) => {
          const { email, displayName } = snapShot.data();
          userAction({
            id: snapShot.id,
            name: displayName,
            email: email,
          });
        });
      } else userAction(null);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <Fragment>
        <NavBar />
        {/*Switch only render one route at once*/}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/explore" component={ExplorePage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignIn />
            }
          />
          <Route exact path="/checkout" component={CheckOut} />
        </Switch>
      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  userAction: (user) => dispatch(userAction(user)),
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectActiveUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
