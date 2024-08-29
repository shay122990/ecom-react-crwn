import "./payment-form.styles.scss";
import { useSelector } from "react-redux";
import { useState } from "react";
import { selectCartTotal } from "../../store/cart/cart-selector";
import { selectCurrentUser } from "../../store/user/user-selector";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button from "../button/button.component";

const PaymentForm = ({ onSuccess, onError }) => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setIsProcessingPayment(true);
    try {
      const response = await fetch(
        "/.netlify/functions/create-payment-intent",
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount: amount * 100 }),
        }
      ).then((res) => res.json());

      const clientSecret = response.paymentIntent.client_secret;

      const paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: currentUser ? currentUser.displayName : "",
          },
        },
      });

      if (paymentResult.error) {
        onError(paymentResult.error.message);
      } else if (paymentResult.paymentIntent.status === "succeeded") {
        onSuccess("Payment Successful!");
      }
    } catch (error) {
      onError("An unexpected error occurred.");
    } finally {
      setIsProcessingPayment(false);
    }
  };
  //   const cardElementOptions = {
  //     style: {
  //       base: {
  //         width: "100%",
  //         backgroundColor: "#000",
  //         color: "#32325d",
  //         fontFamily: "Arial, sans-serif",
  //         fontSize: "16px",
  //         "::placeholder": {
  //           color: "#aab7c4",
  //         },
  //       },
  //       invalid: {
  //         color: "#fa755a",
  //         iconColor: "#fa755a",
  //       },
  //     },
  //   };

  return (
    <div className="payment-form-container">
      <form className="form-container" onSubmit={paymentHandler}>
        <h2>Credit Card Payment:</h2>
        <CardElement className="card" />
        <div className="payment-button">
          <Button buttonType="payment" isLoading={isProcessingPayment}>
            Pay Now
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
