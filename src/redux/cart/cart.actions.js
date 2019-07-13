import {CartActionTypes} from './cart.action.types';

export const toggleCartHidden = () => ({type: CartActionTypes.TOGGLE_HIDDEN});

export const addItem = item => ({type: CartActionTypes.ADD_ITEM, payload: item});

export const removeItemFromCart = item => ({type: CartActionTypes.REMOVE_ITEM_FROM_CART, payload: item});

export const decreaseItemQuantity = item => ({type: CartActionTypes.DECREASE_ITEM_QUANTITY, payload: item});

export const clearCart = () => ({
    type: CartActionTypes.CLEAR_CART
});