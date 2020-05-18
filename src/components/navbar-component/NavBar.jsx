import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";

import "./NavBar.css";
import giraffe from "../icons/giraffe.svg";
import { auth } from "../../Firebase/Firebase";

const NavBar = ({ history, match, currentUser }) => (
  <Fragment>
    <nav>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="icon">
        <i className="fas fa-bars"></i>
      </label>
      <label className="logo" onClick={() => history.push("/")}>
        <img className="home-logo" alt="logo" src={giraffe} />
      </label>
      <ul>
        <li className="option">
          <a onClick={() => history.push("/")}>home</a>
        </li>
        <li className="option">
          <a onClick={() => history.push(`${match.url}explore`)}>explore</a>
        </li>
        {currentUser ? (
          <li className="option">
            <a onClick={() => auth.signOut()}>sign out</a>
          </li>
        ) : (
          <li className="option">
            <a onClick={() => history.push(`${match.url}signin`)}>sign in</a>
          </li>
        )}
      </ul>
    </nav>
  </Fragment>
);

export default withRouter(NavBar);
