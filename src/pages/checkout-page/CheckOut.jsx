import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckOutItem from "../../components/checkout-component/CheckOutItem";
import "./CheckOut.scss";
import { selectTotalPrice, selectCartItems } from "../../redux/selectors";
import StripeCheckoutBtn from "../../components/stripe-component/StripeCheckoutBtn";

const CheckOut = ({ total, cartItems }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    <div className="container">
      {cartItems.map((item) => (
        <CheckOutItem item={item} />
      ))}
    </div>
    <div className="total">Total: ${total}</div>
    <h2>Test Card</h2>
    <div className="test-card">
      <p>4242 4242 4242 4242 - 01/20 - CVV 123</p>
    </div>
    <StripeCheckoutBtn price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  total: selectTotalPrice,
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CheckOut);
