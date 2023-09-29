import { Grid, Paper, Typography, styled } from "@mui/material";
import React from "react";
import ImportantDevicesTwoToneIcon from "@mui/icons-material/ImportantDevicesTwoTone";

const DashboardCards = () => {
  const StyledIcon = styled("div")(({ theme }) => ({
    margin: "auto",
    display: "flex",
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: theme.spacing(3),
  }));
  return (
    <Grid container xs={12} spacing={2}>
      {[0, 1, 2, 4, 5].map((value) => (
        <Grid key={value} item xs={12} sm={6} md={2.4}>
          <Paper
            sx={{
              height: 120,
              padding: 2,
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            }}
            elevation={5}
          >
            <StyledIcon>
              <ImportantDevicesTwoToneIcon color="primary" fontSize="large" />
            </StyledIcon>
            <Typography variant="subtitle2" textAlign={"center"}>
              Dashboard: Monitor
            </Typography>
            <Typography variant="h6" textAlign={"center"}>
              25
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default DashboardCards;
