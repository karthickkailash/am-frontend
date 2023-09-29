import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import CPieChart from "../commonComponents/pieChart";

const DashboardCharts = () => {
  const batteryData = [
    { value: 5, name: "Low battery", fill: "red" },
    { value: 10, name: "In charging", fill: "orange" },
    { value: 15, name: "Above 50%", fill: "green" },
  ];

  return (
    <Grid container xs={12} spacing={2}>
      <Grid item xs={12} sm={6} md={4}>
        <div id={"battery-status"}>
          <Paper
            sx={{
              height: 225,
              padding: 2,
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            }}
            elevation={5}
          >
            <Typography variant="subtitle2">Battery Status</Typography>
            <CPieChart data={batteryData} />
          </Paper>
        </div>
      </Grid>
    </Grid>
  );
};

export default DashboardCharts;
