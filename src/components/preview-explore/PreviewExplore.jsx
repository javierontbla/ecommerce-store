import React, { Fragment } from "react";

import "./PreviewExplore.scss";
import CollectionItem from "../collection-component/CollectionItem";

const PreviewExplore = ({ title, items }) => (
  <Fragment>
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, indx) => indx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  </Fragment>
);

export default PreviewExplore;
