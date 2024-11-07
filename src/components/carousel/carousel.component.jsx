import "./carousel.styles.scss";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../../store/categories/categories-selector";

export default function Carousel() {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [saleCategories, setSaleCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (categoriesMap) {
      const saleCategory = categoriesMap["sale"];
      setSaleCategories(saleCategory || []);
    }
  }, [categoriesMap]);

  const goToSaleCategory = () => {
    navigate("/shop/sale");
  };

  if (isLoading) {
    return <p>Loading sale items...</p>;
  }

  if (saleCategories.length === 0) {
    return <p>No sale items available.</p>;
  }

  return (
    <div className="carousel-container">
      <div className="scroll-indicator left">&lt;</div>
      <div className="scroll-indicator right">&gt;</div>
      <div className="carousel">
        {saleCategories.map((item, index) => (
          <div className="carousel-item" key={index}>
            <img
              src={item.imageUrl}
              alt={item.title}
              className="carousel-img"
              onClick={goToSaleCategory}
            />
            <div className="carousel-caption">
              <h3>{item.title}</h3>
              <p className="price">
                <span className="previous-price">${item.previousPrice}</span>{" "}
                <span className="current-price">${item.price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
