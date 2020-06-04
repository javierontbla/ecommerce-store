import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckOutItem from "../../components/checkout-component/CheckOutItem";
import "./CheckOut.scss";
import { selectTotalPrice, selectCartItems } from "../../redux/selectors";

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
  </div>
);

const mapStateToProps = createStructuredSelector({
  total: selectTotalPrice,
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CheckOut);
