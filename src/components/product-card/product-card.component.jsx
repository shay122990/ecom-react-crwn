import "./product-card.styles.scss";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const [buttonText, setButtonText] = useState("Add to cart");
  const [showCheckoutButton, setShowCheckoutButton] = useState(false);
  const navigate = useNavigate();
  const goToCheckout = () => {
    navigate("/shop/checkout");
  };

  const addProductToCart = () => {
    addItemToCart(product);
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
