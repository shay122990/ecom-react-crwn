import "./sign-in-form.styles.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import MessageDisplay from "../message-display/message-display.component";

import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase.utils";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [message, setMessage] = useState(null);
  const { email, password } = formFields;
  const navigate = useNavigate();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithGooglePopup();
      setMessage({ type: "success", text: "You have successfully signed in" });
    } catch (error) {
      setMessage({ type: "failure", text: "Google sign-in failed" });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      setMessage({ type: "success", text: "You have successfully signed in" });
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          setMessage({ type: "failure", text: "Incorrect password for email" });
          break;
        case "auth/user-not-found":
          setMessage({
            type: "failure",
            text: "No user associated with this email",
          });
          break;
        default:
          setMessage({ type: "failure", text: "Sign-in failed" });
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleRedirect = () => {
    navigate("/shop");
  };

  return (
    <div className="sign-up-container">
      {message && message.type === "success" ? (
        <div>
          <MessageDisplay
            message={message.text}
            type="success"
            onButtonClick={handleRedirect}
            buttonText="Go to Shop"
          />
        </div>
      ) : (
        <div>
          <h2>Already have an account?</h2>
          <span>Sign in with your email and password</span>
          <form onSubmit={handleSubmit} autoComplete="off">
            <FormInput
              label="Email"
              type="email"
              required
              onChange={handleChange}
              name="email"
              value={email}
              autoComplete="off"
            />

            <FormInput
              label="Password"
              type="password"
              required
              onChange={handleChange}
              name="password"
              value={password}
              autoComplete="new-password"
            />
            <div className="buttons-container">
              <Button type="submit">Sign In</Button>
              <Button
                type="button"
                buttonType="google"
                onClick={signInWithGoogle}
              >
                Google Sign In
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default SignInForm;
