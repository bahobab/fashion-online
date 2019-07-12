import {createSelector} from 'reselect';

// const COLLECTION_ID_MAP = { // no need after data normalization     hats: 1,
//  sneaakers: 2,     jackets: 3,     womens: 4,     mens: 5 }

const selectShop = state => state.shop; // this is what's on rootReducer

export const selectShopCollections = createSelector([selectShop], shop => shop.collections);

export const selectCollectionsForPreview = createSelector([selectShopCollections], collections => collections ? Object.keys(collections).map(key => collections[key]) : []);

export const selectShopCollection = collectionUrlParam => createSelector([selectShopCollections], collections => collections? collections[collectionUrlParam] : null); // after data normalization

export const selectCollectionFetching = createSelector(
    [selectShop], shop => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
    [selectShop], shop => !!shop.collections
);

    // export const selectShopCollection = collectionUrlParam =>
    // createSelector([selectShopCollections], collections =>
    // collections.find(collection => collection.id ===
    // COLLECTION_ID_MAP[collectionUrlParam]));