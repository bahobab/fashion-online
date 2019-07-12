import React from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import {createStructuredSelector} from 'reselect';

import CollectionPage from '../collection/Collection.component';
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview.component';

import WithSpinner from '../../components/with-spinner/WthSpinner.component';

import {fetchCollectionsStartAsync}  from '../../redux/shop/shop.actions.js';
import {selectCollectionFetching} from '../../redux/shop/shop.selectors';

import './ShopPage.styles.scss';

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

    componentDidMount() {
        
        // fetch('https://firestore.googleapis.com/v1/projects/kfashion-db/databases/(default)/documents/')
        // .then(response => response.json())
        // .then(collections => console.log(collections));

        // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {

        const {fetchingCollectionAsync} = this.props;

        fetchingCollectionAsync();
        
    }

    render() {
        const {match, isCollectionFetching} = this.props;
        return (

    <div className="shop-page">
        <Route exact path={`${match.path}`} render={(props)=> <CollectionOverviewWithSpinner isLoading={isCollectionFetching} {...props} />}/>
        <Route path={`${match.path}/:collectionId`} render={(props)=><CollectionPageWithSpinner isLoading={isCollectionFetching} {...props}/>}/>
    </div>
        );
    }
};

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectCollectionFetching
})

const mapDispatchToProps = (dispatch) => (
    {
        fetchingCollectionAsync: () => dispatch(fetchCollectionsStartAsync())
    }
)

export default connect(mapStateToProps, mapDispatchToProps) (ShopPage);