import "./directory-item.styles.scss";
import { useNavigate } from "react-router-dom";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  const navigate = useNavigate();
  const goToCategory = () => {
    navigate(`/shop/${title.toLowerCase()}`);
  };
  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="body" onClick={goToCategory}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
