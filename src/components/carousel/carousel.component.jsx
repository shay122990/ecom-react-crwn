import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../../store/categories/categories-selector";
import "./carousel.styles.scss";

export default function Carousel() {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [saleCategories, setSaleCategories] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (categoriesMap) {
      const saleCategory = categoriesMap["sale"];
      if (saleCategory) {
        setSaleCategories(saleCategory);
      } else {
        setSaleCategories([]);
      }
    }
  }, [categoriesMap]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? saleCategories.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === saleCategories.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (isLoading) {
    return <p>Loading sale items...</p>;
  }

  if (saleCategories.length === 0) {
    return <p>No sale items available.</p>;
  }

  return (
    <div className="carousel">
      {saleCategories.length > 0 && (
        <div className="carousel-item">
          <img
            src={saleCategories[currentIndex].imageUrl}
            alt={saleCategories[currentIndex].title}
            className="carousel-img"
          />
          <div className="carousel-caption">
            <h3>{saleCategories[currentIndex].title}</h3>
            <p className="price">
              <span className="previous-price">
                ${saleCategories[currentIndex].previousPrice}
              </span>{" "}
              <span className="current-price">
                ${saleCategories[currentIndex].price}
              </span>
            </p>
          </div>
        </div>
      )}
      <button className="carousel-arrow left" onClick={goToPrevious}>
        &#10094;
      </button>
      <button className="carousel-arrow right" onClick={goToNext}>
        &#10095;
      </button>
    </div>
  );
}
