import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./NavBar.css";
import giraffe from "../icons/giraffe.svg";
import { auth } from "../../Firebase/Firebase";

const NavBar = ({ currentUser }) => (
  <Fragment>
    <nav>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="icon">
        <i className="fas fa-bars"></i>
      </label>
      <label className="logo">
        <img className="home-logo" alt="logo" src={giraffe} />
      </label>
      <ul>
        <Link to="/" className="option">
          home
        </Link>
        <Link to="/explore" className="option">
          explore
        </Link>
        {currentUser ? (
          <a
            href="#signout-btn"
            className="option"
            onClick={() => auth.signOut()}
          >
            sign out
          </a>
        ) : (
          <Link to="/signin" className="option">
            sign in
          </Link>
        )}
      </ul>
    </nav>
  </Fragment>
);

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(NavBar);
