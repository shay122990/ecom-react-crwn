import "./shop.styles.scss";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { fetchCategoriesStartAsync } from "../../store/categories/categories-action";

import CategoriesPreview from "../categories-preview/categories-page-preview";
import Category from "../category/category-page.component";

const Shop = () => {
  console.log("Shop");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStartAsync);
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
