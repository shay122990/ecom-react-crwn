import "./index.scss";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./store/user/user-action";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./utils/firebase.utils";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home-page";
import Authentication from "./routes/authentication/authentication-page";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout-page";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        console.log("User detected after redirect:", user);

        createUserDocumentFromAuth(user);
      } else {
        console.log("No user detected.");
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="shop/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
