import React from "react";

import "./CartDropdown.scss";
import CustomBtn from "../button-component/CustomBtn";

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items"></div>
    <button className="check-btn">Checkout</button>
  </div>
);

export default CartDropdown;
