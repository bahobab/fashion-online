import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import CheckoutItem from '../../components/checkout-item/CheckoutItem.component'
import StripeCheckoutButton from '../../components/stripe-button/StripeButton.component'
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selector';

import './checkout.styles.scss';

const CheckoutPage = ({carItems, total}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {carItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem}/>)
}
        <div className="total">
            <span>TOTAL: ${total}</span>
        </div>
        <div className="test-warning">
            ** Plase use the following test credit card info for payment **
            <br/>
            card#: 4242 4242 4242 4242 - exp: 01/20 CVV: 123
        </div>
        <StripeCheckoutButton price={total}/>
    </div>
);

const mapStateToProps = createStructuredSelector({carItems: selectCartItems, total: selectCartTotal})

export default connect(mapStateToProps)(CheckoutPage);