import React from "react";
import { Route } from "react-router-dom";

import "./ExplorePage.scss";
import CollectionPreview from "../../components/collection-preview-component/CollectionPreview";
import CollectionPage from "../../pages/collection-page/CollectionPage";

// props from routing the shop component on App.js
const ExplorePage = ({ match }) => (
  <>
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionPreview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  </>
);

export default ExplorePage;
