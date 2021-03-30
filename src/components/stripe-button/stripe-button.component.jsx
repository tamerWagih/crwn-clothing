import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51IP61eBvvxnof5LoS4NOodpuQmYYzb1mk0vfIokQUR8aNuHu29FTvK5nqvUYP3xPAvmioa1vIU6ikRk0AhiOInHT000gGQCZNI';

  const onToken = (token) => {
    alert('Payment Success!');
    // Back end!
    // axios({
    //   url: 'payment',
    //   method: 'post',
    //   data: {
    //     amount: priceForStripe,
    //     token,
    //   },
    // })
    //   .then((response) => {
    //     alert('Payment Successful!');
    //   })
    //   .catch((error) => {
    //     console.log('Payment error: ', JSON.parse(error));
    //     alert(
    //       'There was an issue with your payment. please try again with a valid credit card'
    //     );
    //   });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/en/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
