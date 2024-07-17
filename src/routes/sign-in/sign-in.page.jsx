import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRefrence = await createUserDocumentFromAuth(user);
    console.log(userDocRefrence);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In With Google</button>
    </div>
  );
};

export default SignIn;
