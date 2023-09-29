import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { unAuth } from "./routes/unauth";
import { RouteObject } from "./routes/path";
import UnAuthRoute from "./routes/UnAuthRoute";
import AuthRoute from "./routes/AuthRoute";
import HeaderLayout from "./pages/header/headerlayout";

const AppContainer = () => {
  const location = useLocation();
  useEffect(() => {}, [location.pathname]);
  return (
    <>
      <Routes>
        {unAuth?.map((item) => (
          <Route
            key={item?.id}
            path={item?.path}
            element={<UnAuthRoute>{item?.element}</UnAuthRoute>}
          />
        ))}
        {RouteObject?.map((route) => (
          <Route path="" element={<HeaderLayout />}>
            <Route
              key={route?.id}
              path={route?.path}
              element={<AuthRoute>{route?.element}</AuthRoute>}
            />
          </Route>
        ))}
      </Routes>
    </>
  );
};
export default AppContainer;
