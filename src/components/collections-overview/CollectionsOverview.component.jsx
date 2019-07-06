import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import CollectionPreview from '../../components/collection-preview/CollectionPreview.component';

import {selectShopCollections} from '../../redux/shop/shop.selectors';

import './CollectionsOverview.styles.scss';

const CollectionsOverview = ({collections}) => (
    <div className="collections-overview">
        {collections.map(({
            id,
            ...otherCollectionProps
        }) => (<CollectionPreview key={id} {...otherCollectionProps}/>))
}
    </div>
);

const mapStateToProps = state => createStructuredSelector({collections: selectShopCollections})

export default connect(mapStateToProps)(CollectionsOverview);