import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {createStructuredSelector} from 'reselect';

import CustomButton from '../custom-button/CustomButton.component';
import CartItem from '../cart-item/CartItem.component';

import {selectCartItems} from '../../redux/cart/cart.selector';
import {toggleCartHidden} from '../../redux/cart/cart.actions';

import './CartDropdown.styles.scss'

const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className="cart-dropdown">
        {cartItems.length
            ? (
                <div className="cart-items">
                    {cartItems.map(cartitem => (<CartItem key={cartitem.id} item={cartitem}/>))
}
                </div>
            )
            : (
                <span className="empty-message">Your cart is currently empty</span >
            )
}
        <CustomButton
            onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden())
        }}>
            GO TO CHECOUT
        </CustomButton>

    </div>
);

// const mapStateToProps = state => ({cartItems: state.cart.cartItems}) const
// mapStateToProps = state => ({cartItems: selectCartItems(state)})

const mapStateToProps = createStructuredSelector({cartItems: selectCartItems})

export default withRouter(connect(mapStateToProps)(CartDropdown));