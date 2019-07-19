import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import CollectionPageContainer from "../collection/Collection.container";
import CollectionOverviewContainer from "../../components/collections-overview/CollectionsOverview.container";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions.js";

import "./ShopPage.styles.scss";

const ShopPage = ({ fetchingCollectionStart, match }) => {
  useEffect(() => {
    fetchingCollectionStart();
  }, [fetchingCollectionStart]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchingCollectionStart: () => dispatch(fetchCollectionsStart())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
