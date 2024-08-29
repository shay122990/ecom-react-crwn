import "./payment-form.styles.scss";
import { CardElement } from "@stripe/react-stripe-js";
import Button from "../button/button.component";

const PaymentForm = () => {
  return (
    <div className="payment-form-container">
      <div className="form-container">
        <h2>Credit Card Payment:</h2>
        <CardElement />
        <div className="payment-button">
          <Button buttonType="payment">Pay Now</Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
