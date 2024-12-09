import "./carousel.styles.scss";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Carousel({
  items,
  isLoading,
  fallbackText,
  navigateTo,
}) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (navigateTo) {
      navigate(navigateTo);
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!items || items.length === 0) {
    return <p>{fallbackText || "No items available."}</p>;
  }

  return (
    <div className="carousel-container">
      <div className="scroll-indicator left">&lt;</div>
      <div className="scroll-indicator right">&gt;</div>
      <div className="carousel">
        {items.map((item, index) => (
          <div className="carousel-item" key={index}>
            <img
              src={item.imageUrl}
              alt={item.name || "Image"}
              className="carousel-img"
              onClick={handleNavigate}
            />
            <div className="carousel-caption">
              <h3>{item.name}</h3>
              <p className="price">
                <span className="previous-price">${item.previousPrice}</span>
                <span className="current-price">${item.price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
