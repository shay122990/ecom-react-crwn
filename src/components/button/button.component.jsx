import "./button.styles.scss";
import Spinner from "../spinner/spinner.component";

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
  goBack: "goBack",
  payment: "payment",
  signInRedirect: "signIn-Redirect",
};

const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
  return (
    <button
      disabled={isLoading}
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {isLoading ? <Spinner width="20px" height="20px" /> : children}
    </button>
  );
};

export default Button;
