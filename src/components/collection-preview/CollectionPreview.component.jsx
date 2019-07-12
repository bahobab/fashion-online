import React from 'react';
import {Link} from 'react-router-dom';

import CollectionItem from '../collection-item/CollectionItem.component';
import './CollectionPreview.styles.scss';

const CollectionPreview = ({items, title}) => {
    // console.log(items);
    // if (!items) {
    //     return (
    //         <div>Loading ...</div>
    //     )
    // }
    return (
        <div className="collection-preview">
            <Link to={`shop/${title.toLowerCase()}`}><h1 className="title">{title}</h1></Link>
            <div className="preview">
                {items.filter((item, index) => index < 4).map(item => (<CollectionItem key={item.id} item={item}/>))
}
            </div>
        </div>
    )
}

export default CollectionPreview;