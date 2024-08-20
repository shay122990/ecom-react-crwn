import "./index.scss";

import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home-page";
import Authentication from "./routes/authentication/authentication-page";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout-page";

const App = () => {
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
