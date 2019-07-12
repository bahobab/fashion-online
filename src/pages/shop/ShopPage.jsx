import React from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';

import CollectionPageContainer from '../collection/Collection.container';
import CollectionOverviewContainer from '../../components/collections-overview/CollectionsOverview.container';

import {fetchCollectionsStart}  from '../../redux/shop/shop.actions.js';

import './ShopPage.styles.scss';

class ShopPage extends React.Component {

    componentDidMount() {
        const {fetchingCollectionStart} = this.props;

        fetchingCollectionStart();
        
    }

    render() {
        const {match} = this.props;
        return (

    <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer}/>
    </div>
        );
    }
};

const mapDispatchToProps = (dispatch) => (
    {
        fetchingCollectionStart: () => dispatch(fetchCollectionsStart())
    }
)

export default connect(null, mapDispatchToProps) (ShopPage);