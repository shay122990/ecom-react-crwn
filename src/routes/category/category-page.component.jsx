import "./category.styles.scss";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../../store/categories/categories-selector";
import Button from "../../components/button/button.component";
import ProductCard from "../../components/product-card/product-card.component";
import Spinner from "../../components/spinner/spinner.component";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);
  const navigate = useNavigate();

  const goToShop = () => {
    navigate("/shop");
  };

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div className="category-wrapper">
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <Button buttonType="goBack" onClick={goToShop}>
        Go To Shop
      </Button>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="category-container">
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      )}
    </div>
  );
};

export default Category;
