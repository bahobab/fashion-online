import ShopActionTypes from './shop.action.types';

export const updateCollections = collectionMap => (
    {
        type: ShopActionTypes.UPDATED_COLLECTIONS,
        payload: collectionMap
    }
);