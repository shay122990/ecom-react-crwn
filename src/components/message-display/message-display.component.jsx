// import "./message-display.styles.scss";
import Button from "../button/button.component";

const MessageDisplay = ({ message, type, onButtonClick, buttonText }) => {
  const messageClass =
    type === "success" ? "message-success" : "message-failure";

  return (
    <div className={`message-display ${messageClass}`}>
      <h2>{message}</h2>
      {onButtonClick && buttonText && (
        <Button type="button" onClick={onButtonClick}>
          {buttonText}
        </Button>
      )}
    </div>
  );
};

export default MessageDisplay;
