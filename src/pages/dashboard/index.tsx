import { Button, Container, Typography } from "@mui/material";
import React from "react";
import { logout } from "../../reduxStore/loginSlice";
import { useDispatch } from "react-redux";
import DashboardCards from "../../components/dashboard/dashboardCards";
import DashboardCharts from "../../components/dashboard/dashboardCharts";

const Dashboard = () => {
  const dispatch = useDispatch();

  return (
    <Container maxWidth="xl">
      <Typography variant="h6" sx={{ mb: 5, paddingTop: 8 }}>
        Dashboard: Monitoring
      </Typography>
      <DashboardCards />
      <DashboardCharts />
      <Button
        onClick={() => {
          dispatch(logout());
        }}
      >
        Log out
      </Button>
    </Container>
  );
};

export default Dashboard;
