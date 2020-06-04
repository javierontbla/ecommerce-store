import React from "react";
import { connect } from "react-redux";

import "./CheckOutItem.scss";
import { deleteItem, addItem, decreaseItem } from "../../redux/cart-actions";

const CheckOutItem = ({ item, deleteItem, addItemToCart, decreaseItem }) => {
  const { name, imageUrl, price, quantity } = item;
  return (
    <>
      <div className="checkout-item">
        <div className="image-container">
          <img alt="item" src={imageUrl} />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
          <div className="arrow" onClick={() => decreaseItem(item)}>
            &#10094;
          </div>
          <span className="value"> {quantity}</span>
          <div className="arrow" onClick={() => addItemToCart(item)}>
            &#10095;
          </div>
        </span>
        <span className="price">{price}</span>
        <div className="remove-button" onClick={() => deleteItem(item)}>
          &#10005;
        </div>
      </div>
    </>
  );
};

const mapDistpatchToProps = (dispatch) => ({
  deleteItem: (item) => dispatch(deleteItem(item)),
  addItemToCart: (item) => dispatch(addItem(item)),
  decreaseItem: (item) => dispatch(decreaseItem(item)),
});

export default connect(null, mapDistpatchToProps)(CheckOutItem);
