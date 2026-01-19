import { useContext } from "react";
import {AuthContext} from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) return <div className="text-center py-20"><span className="loading loading-spinner loading-lg"></span></div>;
  
  if (user) return children;

  return <Navigate state={location.pathname} to="/auth/login"></Navigate>;
};

export default PrivateRoute;