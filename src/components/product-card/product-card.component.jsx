import "./product-card.styles.scss";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectCartItems } from "../../store/cart/cart-selector";
import { addItemToCart } from "../../store/cart/cart-action";
import { useNavigate } from "react-router-dom";
import Button from "../button/button.component";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const [buttonText, setButtonText] = useState("Add to cart");
  const [showCheckoutButton, setShowCheckoutButton] = useState(false);
  const navigate = useNavigate();
  const goToCheckout = () => {
    navigate("/shop/checkout");
  };

  const addProductToCart = () => {
    dispatch(addItemToCart(cartItems, product));
    setButtonText("Item added");
    setShowCheckoutButton(true);
    setTimeout(() => {
      setButtonText("Add to cart");
    }, 2000);
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        {buttonText}
      </Button>
      {showCheckoutButton && (
        <Button buttonType="inverted" onClick={goToCheckout}>
          Go to checkout
        </Button>
      )}
    </div>
  );
};

export default ProductCard;
