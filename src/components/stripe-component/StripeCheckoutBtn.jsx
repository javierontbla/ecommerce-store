import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutBtn = ({ price }) => {
  // because stripe process payments in CENTS
  const stripePrice = price * 100;
  const publicApiKey =
    "pk_test_51GrqHbBdAyNBekgnZnLq3I2CKPwSzG5ICvP1Q3FqmF7KKl5YlZObMDlRoCZdT4uSw2RL16RHJ4TpP7RktRL2nboE000GeedXIA";
  const displayToken = (token) => {
    console.log(token);
    alert("Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="e-commerce store"
      billingAddress
      shippingAddress
      description={`Total: $${price}`}
      amount={stripePrice}
      panelLabel="Pay Now"
      token={(token) => displayToken(token)}
      stripeKey={publicApiKey}
    />
  );
};

export default StripeCheckoutBtn;
