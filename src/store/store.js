import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

// Persist configuration
const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

// Persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Middleware configuration
const middleWares = [process.env.NODE_ENV === "development" && logger].filter(
  Boolean
);

// Store configuration
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disables serializable check for non-serializable state like functions or promises
    }).concat(middleWares),
  devTools: process.env.NODE_ENV !== "production", // Enables Redux DevTools in development
});

export const persistor = persistStore(store);
