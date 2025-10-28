import "./footer.styles.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="app-footer">
      <div className="footer-content">
        <p className="brand">© {year} CROWN SHOP</p>

        <nav className="footer-links">
          <Link to="/shop">Shop</Link>
          <Link to="/auth">Sign In</Link>
          <Link to="/shop/checkout">Checkout</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
