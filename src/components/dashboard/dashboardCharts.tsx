import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import CPieChart from "../commonComponents/pieChart";
import CBarChart from "../commonComponents/barChart";

const DashboardCharts = () => {
  // mock data for pie chart
  const batteryStatusData = [
    { value: 5, name: "Low battery", fill: "#f2432f" },
    { value: 10, name: "In charging", fill: "orange" },
    { value: 15, name: "Above 50%", fill: "#2cdf41" },
  ];
  const machineStatusData = [
    { value: 35, name: "Reboot", fill: "purple" },
    { value: 80, name: "Offline", fill: "#2294a6" },
    { value: 54, name: "Online", fill: "#e68dd4" },
  ];
  const firewallStatusData = [
    { value: 65, name: "Active", fill: "#2cdf41" },
    { value: 20, name: "Inactive", fill: "#f2432f" },
  ];

  // mock data for bar chart
  const osTypeData = [
    { value: 65, name: "Windows", color: "purple" },
    { value: 40, name: "Linux", color: "#2294a6" },
    { value: 54, name: "Mac", color: "#e68dd4" },
  ];
  const deviceTypeData = [
    { value: 35, name: "Server", color: "#2cdf41" },
    { value: 80, name: "Desktop", color: "#f2432f" },
    { value: 54, name: "Laptop", color: "#e68dd4" },
  ];
  const lastRebootTimeData = [
    { value: 35, name: "Server >30 days", color: "#2cdf41" },
    { value: 80, name: "Desktop >30 days", color: "#f2432f" },
    { value: 54, name: "Laptop >30 days", color: "#e68dd4" },
  ];

  return (
    <>
      {/* ----------------------------------- pie charts ---------------------------------------- */}
      <Grid container spacing={2} paddingTop={2}>
        {/* battery status */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            sx={{
              height: 225,
              padding: 2,
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            }}
            elevation={5}
          >
            <Typography variant="subtitle2">Battery status</Typography>
            <CPieChart data={batteryStatusData} />
          </Paper>
        </Grid>
        {/* battery status */}

        {/* machine status */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            sx={{
              height: 225,
              padding: 2,
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            }}
            elevation={5}
          >
            <Typography variant="subtitle2">
              Machine status as of today
            </Typography>
            <CPieChart data={machineStatusData} paddingAngle={5} />
          </Paper>
        </Grid>
        {/* machine status */}

        {/* firewall status */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            sx={{
              height: 225,
              padding: 2,
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            }}
            elevation={5}
          >
            <Typography variant="subtitle2">
              Network devices firewall status
            </Typography>
            <CPieChart data={firewallStatusData} innerRadius={0} />
          </Paper>
        </Grid>
        {/* firewall status */}
      </Grid>
      {/* ----------------------------------- pie charts end ---------------------------------------- */}
      {/* ----------------------------------- bar charts ---------------------------------------- */}
      <Grid container spacing={2} paddingTop={2}>
        {/* OS type */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            sx={{
              height: 225,
              padding: 2,
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            }}
            elevation={5}
          >
            <Typography variant="subtitle2">OS types</Typography>
            <CBarChart barData={osTypeData} />
          </Paper>
        </Grid>
        {/* OS type */}

        {/* device type */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            sx={{
              height: 225,
              padding: 2,
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            }}
            elevation={5}
          >
            <Typography variant="subtitle2">Device types</Typography>
            <CBarChart barData={deviceTypeData} shape="Triangle" />
          </Paper>
        </Grid>
        {/* device type */}

        {/* last reboot */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            sx={{
              height: 225,
              padding: 2,
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            }}
            elevation={5}
          >
            <Typography variant="subtitle2">Last reboot time</Typography>
            <CBarChart barData={lastRebootTimeData} />
          </Paper>
        </Grid>
        {/* last reboot */}
      </Grid>
      {/* ----------------------------------- bar charts end---------------------------------------- */}
    </>
  );
};

export default DashboardCharts;
