import { createContext, useState } from "react";
import Products from "../shop-data.json";

export const ProductsContext = createContext({
  products: [],
  setProducts: () => {},
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(Products);
  const value = { products };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
