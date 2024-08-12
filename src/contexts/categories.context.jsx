import { createContext, useState, useEffect, useMemo } from "react";
// import SHOP_DATA from "../shop-data.js";
// import { addCollectionAndDocuments } from "../utils/firebase.utils.js";
import { getCategoriesAndDocument } from "../utils/firebase.utils";

export const CategoriesContext = createContext({
  categoriesMap: {},
  setCategoriesMap: () => {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      try {
        const categoryMap = await getCategoriesAndDocument();
        setCategoriesMap(categoryMap);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    getCategoriesMap();
  }, []);

  //the below useEffect is to be run once upon initiation to set the products, usually not to be run on frontend, only for this instance
  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // }, []);

  const value = useMemo(() => ({ categoriesMap }), [categoriesMap]);

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
