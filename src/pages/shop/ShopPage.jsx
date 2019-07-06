import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import CollectionPreview from '../../components/collection-preview/CollectionPreview.component';
import {selectShopCollections} from '../../redux/shop/shop.selectors';

import './ShopPage.styles.scss';
// import SHOP_DATA from './shop.data';

const ShopPage = ({collections}) => (
    <div className="shop-page">
        {collections.map(({
            id,
            ...otherCollectionProps
        }) => (<CollectionPreview key={id} {...otherCollectionProps}/>))
}
    </div>
);

const mapStateToProps = createStructuredSelector({collections: selectShopCollections})

export default connect(mapStateToProps)(ShopPage);