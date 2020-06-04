import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ReactComponent as CartImg } from "../icons/cart.svg";
import "./CartIcon.scss";
import { cartAction } from "../../redux/cart-actions";
import { selectCartItemsCount } from "../../redux/selectors";

const CartIcon = ({ cartHidden, itemCount }) => (
  <div className="cart-icon" onClick={cartHidden}>
    <CartImg className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  cartHidden: () => dispatch(cartAction()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
