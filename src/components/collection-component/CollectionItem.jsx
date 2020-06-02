import React from "react";
import { connect } from "react-redux";

import "./CollectionItem.scss";
import { addItem } from "../../redux/cart-actions";

const CollectionItems = ({ item, addItem }) => {
  const { imageUrl, name, price } = item;

  return (
    <div className="collection-item">
      <div className="img" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <button className="add-btn" onClick={() => addItem(item)}>
        ADD CART
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItems);
