import "./category-preview.styles.scss";

import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link className="title" to={title}>
          {title.toUpperCase()}
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/ios-glyphs/30/chevron-right.png"
            alt="chevron-right"
            className="chevron-right"
          />
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
