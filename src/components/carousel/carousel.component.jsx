import "./carousel.styles.scss";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectCategories } from "./path/to/your/selectors";

export default function Carousel() {
  const categories = useSelector(selectCategories);
  const saleCategories = categories.filter(
    (category) => category.title === "Sale"
  );

  const [currentIndex, setCurrentIndex] = useState(0);

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
