import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { logout } from "../../reduxStore/loginSlice";
import { useDispatch } from "react-redux";
import DashboardCards from "../../components/dashboard/dashboardCards";
import DashboardCharts from "../../components/dashboard/dashboardCharts";

const Dashboard = () => {
  const dispatch = useDispatch();

  return (
    <Container maxWidth="xl">
      <Typography variant="h6" sx={{ mb: 5 }}>
        Dashboard: Monitoring
      </Typography>
      <Grid container xs={12} spacing={2}>
        <Grid item xs={12}>
          <DashboardCards />
        </Grid>
        <Grid item xs={12}>
          <DashboardCharts />
        </Grid>
      </Grid>
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
