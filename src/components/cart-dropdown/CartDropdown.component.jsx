import React from 'react';

import CustomButton from '../custom-button/CustomButton.component';

import './CartDropdown.styles.scss'

const CartDropdown = (props) => (
    <div className="cart-dropdown">
        <div className="cart-items"></div>
        <CustomButton>GO TO CHECOUT</CustomButton>
    </div>
);

export default CartDropdown;