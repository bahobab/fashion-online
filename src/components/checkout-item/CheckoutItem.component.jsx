import React from 'react';
import {connect} from 'react-redux';

import {addItem, removeItemFromCart, decreaseItemQuantity} from '../../redux/cart/cart.actions.js';

import './CheckoutItem.styles.scss'

const CheckOutItem = ({cartItem, addItem, decreaseItemQuantity, removeItemFromCart}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    return <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="item"/>
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
            <div className="arrow" onClick={() => decreaseItemQuantity(cartItem)}>&#10094;</div>
            <span className="value">{quantity}</span>
            <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
        </span>
        <span className="price">{price}</span>
        <div className="remove-button" onClick={() => removeItemFromCart(cartItem)}>&#10005;</div>
    </div>
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    removeItemFromCart: item => dispatch(removeItemFromCart(item)),
    decreaseItemQuantity: item => dispatch(decreaseItemQuantity(item))
})

export default connect(null, mapDispatchToProps)(CheckOutItem);