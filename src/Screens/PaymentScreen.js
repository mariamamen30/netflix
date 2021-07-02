import React, { useState } from "react";
import "./PaymentScreen.css";

import { Elements, ElementsConsumer } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "../PaymentForm";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51IzU2ZAolzgeHjRM9dHTyLGlF2HJmd03LtomJiWjQGMDActJpeGanymtgXNWHdjeEstW643fYorxy2eWnjerBuey00HhvqYVlc"
);

const PaymentScreen = () => {
  return (
    <div className="paymentScreen">
      <div className="paymentScreen__left"></div>
      <div className="paymentScreen__right">
        <Elements stripe={stripePromise}>
          <ElementsConsumer>
            {({ elements, stripe }) => (
              <PaymentForm elements={elements} stripe={stripe} />
            )}
          </ElementsConsumer>
        </Elements>
      </div>
    </div>
  );
};

export default PaymentScreen;
