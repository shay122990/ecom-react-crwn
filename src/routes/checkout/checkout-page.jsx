import "./checkout.styles.scss";
import { useSelector } from "react-redux";
import { useState } from "react";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart-selector";
import { useNavigate } from "react-router-dom";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import Button from "../../components/button/button.component";
import PaymentForm from "../../components/payment-form/payment-form.component";
import MessageDisplay from "../../components/message-display/message-display.component";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const navigate = useNavigate();
  const [message, setMessage] = useState(null);

  const goToShop = () => navigate("/shop");

  const handleSuccess = (message) => {
    setMessage({ type: "success", text: message });
  };

  const handleError = (message) => {
    setMessage({ type: "failure", text: message });
  };

  return (
    <div className="checkout-container">
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
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <Button onClick={goToShop}>Select More Items</Button>
        <span>TOTAL: ${cartTotal}</span>
      </div>
      <PaymentForm onSuccess={handleSuccess} onError={handleError} />
      {message && (
        <MessageDisplay
          message={message.text}
          type={message.type}
          onButtonClick={() => setMessage(null)}
          buttonText="Close"
        />
      )}
    </div>
  );
};

export default Checkout;
