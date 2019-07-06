import React from 'react';

import CollectionsOverview from '../../components/collections-overview/CollectionsOverview.component';
import './ShopPage.styles.scss';
// import SHOP_DATA from './shop.data';

const ShopPage = ({collections}) => (
    <div className="shop-page">
        <CollectionsOverview/>
    </div>
);

export default ShopPage;