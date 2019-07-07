import React from 'react';
import {connect} from 'react-redux';

import CollectionItem from '../../components/collection-item/CollectionItem.component';
import {selectShopCollection} from '../../redux/shop/shop.selectors';

import './Collection.styles.scss';

const CollectionPage = ({match, collection}) => {
    console.log('>>>', collection);
    return <div className="category">
        <h2>Collection Page</h2>
    </div>
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectShopCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);