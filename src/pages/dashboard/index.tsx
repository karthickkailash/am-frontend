import { Button } from "@mui/material";
import React from "react";
import { logout } from "../../reduxStore/loginSlice";
import { useDispatch } from "react-redux";

const Dashboard = () => {
  const dispatch = useDispatch();
  return (
    <div>
      Dashboard{" "}
      <Button
        onClick={() => {
          dispatch(logout());
        }}
      >
        Log out
      </Button>
    </div>
  );
};

export default Dashboard;
