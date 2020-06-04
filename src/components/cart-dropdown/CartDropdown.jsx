import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import "./CartDropdown.scss";
import CartItem from "../cart-item-component/CartItem";
import { selectCartItems } from "../../redux/selectors";
import { cartAction } from "../../redux/cart-actions";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((item) => <CartItem item={item} key={item.id} />)
      ) : (
        <span className="empty-cart">Your cart is empty</span>
      )}
    </div>
    <button
      className="check-btn"
      onClick={() => {
        history.push("/checkout");
        dispatch(cartAction());
      }}
    >
      Checkout
    </button>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
