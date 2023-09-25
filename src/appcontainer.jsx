import React from "react";
import { Routes, Route } from "react-router-dom";
import { unAuth } from "./routes/unauth";
import { RouteObject } from "./routes/path";
import UnAuthRoute from "./routes/UnAuthRoute";
import AuthRoute from "./routes/AuthRoute";

const AppContainer = () => {
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
          <Route
            key={route?.id}
            path={route?.path}
            element={<AuthRoute>{route?.element}</AuthRoute>}
          />
        ))}
      </Routes>
    </>
  );
};
export default AppContainer;
