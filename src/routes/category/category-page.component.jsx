import "./category.styles.scss";
import { useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { selectCategoriesMap } from "../../store/categories/categories-selector";
import Button from "../../components/button/button.component";
import ProductCard from "../../components/product-card/product-card.component";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);
  const navigate = useNavigate();

  const goToShop = () => {
    navigate("/shop");
  };

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <Button buttonType="goBack" onClick={goToShop}>
        Go To Shop
      </Button>

      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;
