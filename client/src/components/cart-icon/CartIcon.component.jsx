import React from 'react';
import {connect} from 'react-redux';

import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'

import {selectCartItemsCount} from '../../redux/cart/cart.selector';
import './CartIcon.styles.scss';

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">{itemCount}
        </span>
    </div>
);

// const mapStateToProps = ({cart: {         cartItems     }}) => ({
// itemCount: cartItems.reduce((accumulatedQuantity, cartItem) =>
// accumulatedQuantity + cartItem.quantity, 0) });

const mapStateToProps = state => ({itemCount: selectCartItemsCount(state)})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);