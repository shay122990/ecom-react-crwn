import "./shop.styles.scss";

import { Routes, Route } from "react-router-dom";

import CategoriesPreview from "../categories-preview/categories-page-preview";
import Category from "../category/category-page.component";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
