import React from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';

import CollectionPage from '../collection/Collection.component';
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview.component';

import {updateCollections}  from '../../redux/shop/shop.actions.js';
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';

import './ShopPage.styles.scss';
// import SHOP_DATA from './shop.data';

class ShopPage extends React.Component {
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const collectionRef = firestore.collection('collections');
        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            // console.log(snapshot);
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            this.props.updateCollections(collectionsMap);
        })
    }

    render() {
        const {match} = this.props;
        return (

    <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview}/>
        <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
    </div>
        );
    }
};

const mapDispatchToProps = (dispatch) => (
    {
        updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
    }
)

export default connect(null, mapDispatchToProps) (ShopPage);