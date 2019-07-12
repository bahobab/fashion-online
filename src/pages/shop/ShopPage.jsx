import React from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';

import CollectionPage from '../collection/Collection.component';
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview.component';

import WithSpinner from '../../components/with-spinner/WthSpinner.component';

import {updateCollections}  from '../../redux/shop/shop.actions.js';
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';

import './ShopPage.styles.scss';
// import SHOP_DATA from './shop.data';
const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    state = {isLoading: true};
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const collectionRef = firestore.collection('collections');
        
        // fetch('https://firestore.googleapis.com/v1/projects/kfashion-db/databases/(default)/documents/')
        // .then(response => response.json())
        // .then(collections => console.log(collections));

        // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {

        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            this.props.updateCollections(collectionsMap);
            this.setState({isLoading: false});
        })
    }

    render() {
        const {match} = this.props;
        const {isLoading} = this.state;
        return (

    <div className="shop-page">
        <Route exact path={`${match.path}`} render={(props)=> <CollectionOverviewWithSpinner isLoading={isLoading} {...props} />}/>
        <Route path={`${match.path}/:collectionId`} render={(props)=><CollectionPageWithSpinner isLoading={isLoading} {...props}/>}/>
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