import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 1000;
    const publishableKey = 'pk_test_H7E9POoPRpdugaGQCTbQDpVa';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (<StripeCheckout
        label="PayNow"
        name="Fashion Sketchable"
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}/>);

}

export default StripeCheckoutButton;