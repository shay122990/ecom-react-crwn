import "./sale-items.styles.scss";
import Carousel from "../carousel/carousel.component";

export default function SaleItems() {
  return (
    <div className="sales-container">
      <h2>Last Chance Items</h2>
      <Carousel />
    </div>
  );
}
