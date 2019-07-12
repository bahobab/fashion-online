import ShopActionTypes from './shop.action.types';

import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';


export const fetchCollectionsStart = () => (
    {
        type: ShopActionTypes.FETCH_COLLECTIONS_STARTED,
    }
);

export const fetchCollectionsSuccess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCEEDED,
    payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILED,
    payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
    
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());

        collectionRef.get()
            .then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            
            dispatch(fetchCollectionsSuccess(collectionsMap));
        })
        .catch(error => dispatch(fetchCollectionsFailure(error.message)))
    
    };
};