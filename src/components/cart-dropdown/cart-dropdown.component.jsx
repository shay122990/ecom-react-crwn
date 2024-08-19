import "./cart-dropdown.styles.scss";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = () => {
  const { cartItems, cartTotal, clearItemFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckout = () => {
    navigate("/shop/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item-container">
            <CartItem cartItem={item} />
            <span onClick={() => clearItemFromCart(item)}>&#10006;</span>
          </div>
        ))}
        <div className="total">TOTAL: ${cartTotal}</div>
      </div>
      <Button onClick={goToCheckout}>Go To Checkout</Button>
    </div>
  );
};

export default CartDropdown;
