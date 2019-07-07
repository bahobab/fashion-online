import React from 'react';
import {connect} from 'react-redux';

import CollectionItem from '../../components/collection-item/CollectionItem.component';
import {selectShopCollection} from '../../redux/shop/shop.selectors';

import './Collection.styles.scss';

const CollectionPage = ({match, collection}) => {
    const {title, items} = collection;
    return <div className="collection-page">
        <h2>{title}</h2>
        <div className="items">
            {items.map(item => (<CollectionItem key={item.id} item={item}/>))
}
        </div>
    </div>
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectShopCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);