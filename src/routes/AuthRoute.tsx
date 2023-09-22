import React, { useEffect } from "react";

const AuthRoute = ({ children }) => {
  // const userData = store?.getState()?.app?.token;
  // const dispatch = useDispatch();
  // const { pathname } = window.location;

  // useEffect(
  // 	() => () => {
  // 		if (pathname) {
  // 			dispatch(setRecentUrl(pathname));
  // 		}
  // 	},
  // 	[pathname, dispatch]
  // );

  // if (!userData) {
  // 	redirectToLogin();
  // 	return <Navigate to="/" replace />
  // }

  return children;
};

export default AuthRoute;
