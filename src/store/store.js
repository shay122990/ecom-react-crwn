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

// Conditionally add logger only in development
const middleWares = [];

if (process.env.NODE_ENV === "development") {
  middleWares.push(logger);
}

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middleWares),
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);
