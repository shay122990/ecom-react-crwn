import "./sign-in-form.styles.scss";

import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

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
  const [isSignedIn, setIsSignedIn] = useState(false); // Track sign-in status
  const { email, password } = formFields;
  const navigate = useNavigate(); // Initialize navigate

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithGooglePopup();
      setIsSignedIn(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      setIsSignedIn(true); // Set signed-in state to true
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("No user associated with this email");
          break;
        default:
          console.log(error);
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
      {isSignedIn ? (
        <div>
          <h2>You have successfully signed in</h2>
          <Button type="button" onClick={handleRedirect}>
            Go to Shop
          </Button>
        </div>
      ) : (
        <div>
          <h2>Already have an account?</h2>
          <span>Sign in with your email and password</span>
          <form onSubmit={handleSubmit}>
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
