import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) =>{
    const priceForStripe = price * 100;
    const publishableKey ='pk_test_51KkivZKEhOz8CR8kQlDSZHQ1mGTSAZWVM6PV69hO4pidZsyYg543zlp4O7WvaqifaGGiTddjZPKsWo8NJXIkCzWm00myaIXR8l';
    const onToken= token  => {
        console.log(token);
        alert("Bravo vous avez testé mon Projet E-Commerce, Nassim's Clothing")
    }
    return(
        <StripeCheckout
            label ='Pay Now'
            name ="Nassim's Clothing"
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/fv6.svg'
            description={`Your total is $${price}`}
            amout={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        ></StripeCheckout>
    )
}
export default StripeCheckoutButton;