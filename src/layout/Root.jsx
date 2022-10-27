import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";

const Root = () => {
  const {theme} = useContext(AuthContext)

  return (
    <div className="bg-base-200" data-theme={theme}>
      <Header />
      <div className="my-10 lg:my-16 pt-16">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Root;
