import "./sign-up-form.styles.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
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
  const [isSignedUp, setIsSignedUp] = useState(false); // Track sign-up status
  const { displayName, email, password, confirmPassword } = formFields;
  const navigate = useNavigate(); // Initialize navigate

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      setIsSignedUp(true); // Set signed-up state to true
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("User creation encountered an error", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleRedirect = () => {
    navigate("/shop"); // Redirect to shop page
  };

  return (
    <div className="sign-up-container">
      {isSignedUp ? (
        <div>
          <h2>Account created successfully</h2>
          <Button type="button" onClick={handleRedirect}>
            Go to Shop
          </Button>
        </div>
      ) : (
        <div>
          <h2>Don't have an account?</h2>
          <span>Sign up with your email and password</span>
          <form onSubmit={handleSubmit}>
            <FormInput
              label="Display Name"
              type="text"
              required
              onChange={handleChange}
              name="displayName"
              value={displayName}
              autoComplete="name"
            />

            <FormInput
              label="Email"
              type="email"
              required
              onChange={handleChange}
              name="email"
              value={email}
              autoComplete="email"
            />

            <FormInput
              label="Password"
              type="password"
              required
              onChange={handleChange}
              name="password"
              value={password}
              autoComplete="current-password"
            />

            <FormInput
              label="Confirm Password"
              type="password"
              required
              onChange={handleChange}
              name="confirmPassword"
              value={confirmPassword}
              autoComplete="current-password"
            />
            <Button type="submit">Sign Up</Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SignUpForm;
