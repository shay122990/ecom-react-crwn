import { Outlet } from "react-router-dom";

import Directory from "../../components/directory/directory.component";
import SaleItems from "../../components/sale-items/sale-items.components";

const Home = () => {
  return (
    <div>
      <Directory />
      <Outlet />
      <SaleItems />
    </div>
  );
};

export default Home;
