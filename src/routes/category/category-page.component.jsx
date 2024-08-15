import "./category.styles.scss";

import { useContext, useState, useEffect, Fragment } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../../components/button/button.component";
import ProductCard from "../../components/product-card/product-card.component";

import { CategoriesContext } from "../../contexts/categories.context";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
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
        Go Back
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
