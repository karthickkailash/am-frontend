import store from "../reduxStore/store";

const UnAuthRoute = ({ children }) => {
  const userData = store?.getState()?.login?.token;
  if (userData && userData !== "") {
    window.location.href = "/dashboard";
  }
  return children;
};

export default UnAuthRoute;
