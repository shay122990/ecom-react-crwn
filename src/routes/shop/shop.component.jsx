import "./shop.styles.scss";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getCategoriesAndDocuments } from "../../utils/firebase.utils";

import {
  setCategories,
  setLoading,
} from "../../store/categories/categories-reducer";

import CategoriesPreview from "../categories-preview/categories-page-preview";
import Category from "../category/category-page.component";
import Spinner from "../../components/spinner/spinner.component";

const Shop = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.categories.isLoading);

  useEffect(() => {
    const getCategoriesMap = async () => {
      dispatch(setLoading(true));
      try {
        const categoriesArray = await getCategoriesAndDocuments("categories");
        dispatch(setCategories(categoriesArray));
      } finally {
        dispatch(setLoading(false));
      }
    };

    getCategoriesMap();
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <Routes>
          <Route index element={<CategoriesPreview />} />
          <Route path=":category" element={<Category />} />
        </Routes>
      )}
    </>
  );
};

export default Shop;
