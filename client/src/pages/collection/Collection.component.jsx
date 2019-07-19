import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/CollectionItem.component";
import { selectShopCollection } from "../../redux/shop/shop.selectors";

import "./Collection.styles.scss";
// import { firestore } from "../../firebase/firebase.utils";

const CollectionPage = ({ match, collection }) => {
  //   React.useEffect(() => {
  //     console.log("I am subscribing...");
  //     const unsubscribeFromCollections = firestore
  //       .collection("collection")
  //       .onSnapshot(snapshot => console.log(snapshot));
  //     return () => {
  //       console.log("I am unsubscribing...");
  //       unsubscribeFromCollections();
  //     };
  //   }, []);

  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2>{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectShopCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
