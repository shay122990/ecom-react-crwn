import "./sign-up-form.styles.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import MessageDisplay from "../message-display/message-display.component";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [message, setMessage] = useState(null);
  const { displayName, email, password, confirmPassword } = formFields;
  const navigate = useNavigate();
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setMessage({ type: "failure", text: "Passwords do not match" });
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      setMessage({ type: "success", text: "Account created successfully" });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setMessage({
          type: "failure",
          text: "Cannot create user, email already in use",
        });
      } else {
        setMessage({
          type: "failure",
          text: "User creation encountered an error",
        });
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
          <h2>Don't have an account?</h2>
          <span>Sign up with your email and password</span>
          <form onSubmit={handleSubmit} autoComplete="off">
            <FormInput
              label="Display Name"
              type="text"
              required
              onChange={handleChange}
              name="displayName"
              value={displayName}
              autoComplete="off"
            />

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

            <FormInput
              label="Confirm Password"
              type="password"
              required
              onChange={handleChange}
              name="confirmPassword"
              value={confirmPassword}
              autoComplete="new-password"
            />
            <Button type="submit">Sign Up</Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SignUpForm;
