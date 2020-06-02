import React from "react";
import { connect } from "react-redux";

import { ReactComponent as CartImg } from "../icons/cart.svg";
import "./CartIcon.scss";
import { cartAction } from "../../redux/cart-actions";

const CartIcon = ({ cartHidden }) => (
  <div className="cart-icon" onClick={cartHidden}>
    <CartImg className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  cartHidden: () => dispatch(cartAction()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
