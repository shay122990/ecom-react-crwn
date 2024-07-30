import React from "react";
import App from "./App";
import "./index.scss";
import { UserProvider } from "./contexts/user.context";
import { ProductsProvider } from "./contexts/products.context";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
const container = document.getElementById("app");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <App />
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
