import {createSelector} from 'reselect';

const selectShop = state => state.shop; // this is what's on rootReducer

export const selectShopCollections = createSelector([selectShop], shop => shop.collections);