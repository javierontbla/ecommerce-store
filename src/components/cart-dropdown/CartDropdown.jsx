import React from "react";
import { connect } from "react-redux";

import "./CartDropdown.scss";
import CartItem from "../cart-item-component/CartItem";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems
        ? cartItems.map((item) => <CartItem item={item} key={item.id} />)
        : null}
    </div>
    <button className="check-btn">Checkout</button>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
