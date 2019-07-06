import React from 'react';
import {Route} from 'react-router-dom';

import CollectionPage from '../collection/Collection.component';
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview.component';
import './ShopPage.styles.scss';
// import SHOP_DATA from './shop.data';

const ShopPage = ({match}) => (
    <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview}/>
        <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
    </div>
);

export default ShopPage;