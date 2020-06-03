import React from "react";
import { connect } from "react-redux";

import { ReactComponent as CartImg } from "../icons/cart.svg";
import "./CartIcon.scss";
import { cartAction } from "../../redux/cart-actions";

const CartIcon = ({ cartHidden, itemCount }) => (
  <div className="cart-icon" onClick={cartHidden}>
    <CartImg className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  cartHidden: () => dispatch(cartAction()),
});

const mapStateToProps = ({ cart: { cartItems } }) => ({
  itemCount: cartItems.reduce((acumm, element) => acumm + element.quantity, 0),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
