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
    <section className="sales-wrapper">
      <div className="sales-header">
        <h2>Last Chance Deals</h2>
      </div>

      <Carousel
        items={saleCategories}
        isLoading={isLoading}
        fallbackText="No sale items available."
        navigateTo="/shop/sale"
      />

      <button
        className="browse-sale-btn"
        onClick={() => (window.location.href = "/shop/sale")}
      >
        Browse All Sale Items
      </button>
    </section>
  );
}
