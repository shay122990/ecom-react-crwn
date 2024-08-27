import "./cart-dropdown.styles.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
  selectIsCartOpen,
} from "../../store/cart/cart-selector";
import { setIsCartOpen } from "../../store/cart/cart-reducer";
import { useNavigate } from "react-router-dom";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const goToCheckout = () => {
    navigate("/shop/checkout");
    dispatch(setIsCartOpen(false));
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <div className="total">TOTAL: ${cartTotal}</div>
      {isCartOpen && <Button onClick={goToCheckout}>Go To Checkout</Button>}
    </div>
  );
};

export default CartDropdown;
