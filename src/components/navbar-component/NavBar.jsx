import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./NavBar.css";
import giraffe from "../icons/giraffe.svg";
import { auth } from "../../Firebase/Firebase";
import CartIcon from "../cart-component/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";

const NavBar = ({ currentUser, cart }) => (
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
        <li>
          <CartIcon />
        </li>
      </ul>
      {cart ? null : <CartDropdown />}
    </nav>
  </Fragment>
);

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  cart: state.cart.hidden,
});

export default connect(mapStateToProps)(NavBar);
