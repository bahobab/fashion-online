import ShopActionTypes from './shop.action.types'
import shopData from './shop.data';

const INITIAL_STATE = {
    collections: shopData
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ShopActionTypes.UPDATED_COLLECTIONS:
            return {
                ...state,
                collections: action.payload
            }
        default:
            return state;
    }
};

export default shopReducer;