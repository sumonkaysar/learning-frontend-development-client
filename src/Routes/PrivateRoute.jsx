import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";
import {HashLoader} from "react-spinners";


const PrivateRoute = ({children}) => {
  const {user, loading} = useContext(AuthContext);
  const location = useLocation();

  // If the page is loading, show spinner
  if (loading) {
    return (
      <div className="flex justify-center">
        <HashLoader color="#36d7b7" />
      </div>
    );
  }

  // if user is not found, redirect to login
  if(!user) {
    return <Navigate to="/login" state={{from: location}} replace />;
  }
  return children;
}

export default PrivateRoute;
