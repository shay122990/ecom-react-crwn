import "./index.scss";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import { store, persistor } from "./store/store";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
);
