import { Navigate } from "react-router-dom";
import store from "../reduxStore/store";
import { redirectToLogin } from "../reduxStore/localStorage";

const AuthRoute = ({ children }) => {
  const userData = store?.getState()?.login?.token;
  if (!userData) {
    redirectToLogin();
    return <Navigate to="/" replace />;
  }
  return children;
};

export default AuthRoute;
