import React from 'react';
import {connect} from 'react-redux';

import CustomButton from '../custom-button/CustomButton.component';
import CartItem from '../cart-item/CartItem.component';
import './CartDropdown.styles.scss'

const CartDropdown = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.map(cartitem => (<CartItem key={cartitem.id} item={cartitem}/>))
}
        </div>
        <CustomButton>GO TO CHECOUT</CustomButton>
    </div>
);

const mapStateToProps = state => ({cartItems: state.cart.cartItems})

export default connect(mapStateToProps)(CartDropdown);