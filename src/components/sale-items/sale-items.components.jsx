import "./sale-items.styles.scss";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../../store/categories/categories-selector";
import Carousel from "../carousel/carousel.component";

export default function SaleItems() {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [saleCategories, setSaleCategories] = useState([]);

  useEffect(() => {
    if (categoriesMap) {
      const saleCategory = categoriesMap["sale"];
      setSaleCategories(saleCategory || []);
    }
  }, [categoriesMap]);

  return (
    <div className="sales-container">
      <h2>Last Chance Items</h2>
      <Carousel
        items={saleCategories}
        isLoading={isLoading}
        fallbackText="No sale items available."
        navigateTo="/shop/sale"
      />
    </div>
  );
}
