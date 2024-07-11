import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA1-wky25FTZq6-W_62WIvn0ue8urn9Yvg",
  authDomain: "crwn-2024-82562.firebaseapp.com",
  projectId: "crwn-2024-82562",
  storageBucket: "crwn-2024-82562.appspot.com",
  messagingSenderId: "380126156579",
  appId: "1:380126156579:web:74b3aea34035c4373dde96",
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
