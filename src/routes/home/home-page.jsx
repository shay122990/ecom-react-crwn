import { Outlet } from "react-router-dom";
import "./home.styles.scss";
import Directory from "../../components/directory/directory.component";
import SaleItems from "../../components/sale-items/sale-items.components";

const Home = () => {
  return (
    <div className="home-container">
      <Directory />
      <Outlet />
      <SaleItems />
    </div>
  );
};

export default Home;
