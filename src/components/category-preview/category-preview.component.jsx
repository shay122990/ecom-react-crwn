import "./category-preview.styles.scss";

import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link className="title" to={title}>
          <span className="text">{title.toUpperCase()}</span>
          <span className="chevron-right">
            <img
              src="https://img.icons8.com/ios-glyphs/30/ffffff/chevron-right.png"
              alt="chevron-right"
            />
          </span>
        </Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
