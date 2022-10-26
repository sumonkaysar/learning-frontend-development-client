import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";

const Root = () => {

  return (
    <div className="bg-base-200">
      <Header />
      <div className="my-10 pt-16">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Root;
