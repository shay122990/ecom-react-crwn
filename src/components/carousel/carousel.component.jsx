import React, { useState } from "react";
import "./carousel.styles.scss";
const saleCategories = [
  {
    id: 1,
    name: "summer black dress",
    imageUrl:
      "https://images.unsplash.com/photo-1524504259109-ddd837233694?q=80&w=1728&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    previousPrice: 24,
    price: 12,
  },
  {
    id: 2,
    name: "black leather jackets",
    imageUrl:
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    previousPrice: 27,
    price: 13.55,
  },
  {
    id: 3,
    name: "nike sneakers",
    imageUrl:
      "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    previousPrice: 19,
    price: 9.55,
  },
  {
    id: 4,
    name: "ice cream cap",
    imageUrl:
      "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    previousPrice: 22,
    price: 14,
  },
  {
    id: 5,
    name: "3-pack",
    imageUrl:
      "https://images.unsplash.com/photo-1716541425064-b07b68f436de?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    previousPrice: 20.5,
    price: 10.25,
  },
];

export default function Carousel() {
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
      <button className="carousel-arrow left" onClick={goToPrevious}>
        &#10094;
      </button>
      <button className="carousel-arrow right" onClick={goToNext}>
        &#10095;
      </button>
    </div>
  );
}
