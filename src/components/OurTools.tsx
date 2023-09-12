import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { themeColors } from "../constants/colors";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AutoModeIcon from "@mui/icons-material/AutoMode";
const OurTools = () => {
  const { WHITE, PRIME_BLUE } = themeColors;
  const matches = useMediaQuery("(min-width:800px)");

  const whatWeDo = [
    {
      blurb: "Real-time monitoring",
      icon: <VisibilityIcon sx={{ color: WHITE, fontSize: 35 }} />,
    },
    {
      blurb:
        "Alerts: so your support teams knows when there is a critical issue",
      icon: <ReportProblemIcon sx={{ color: WHITE, fontSize: 35 }} />,
    },
    {
      blurb: "Dashboards to help your team see exactly what broke and when",
      icon: <DashboardIcon sx={{ color: WHITE, fontSize: 35 }} />,
    },
    {
      blurb:
        "Auto-resolve easy issues so your teams can focus on company projects.",
      icon: <AutoModeIcon sx={{ color: WHITE, fontSize: 35 }} />,
    },
  ];

  return (
    <Container
      disableGutters
      sx={{
        // borderTop: 1,
        // borderBottom: 1,
        // borderColor: WHITE,
        display: "flex",
        flexDirection: matches ? "row" : "column",
        background: WHITE,
        minHeight: 200,
        minWidth: "100%",
        px: "5px",
        py: 3,
        mb: 5,
      }}
    >
      {/* create a map function for whatWeDo object */}
      {/* create a box for each item in the map function */}
      {/* add a key to each box */}
      {/* add a value to each box */}
      {whatWeDo.map((item, index) => {
        return (
          <Box
            key={index}
            sx={{
              backgroundColor: PRIME_BLUE,
              borderRadius: "12px",
              padding: 2,
              margin: 2,
              flex: "1 1 0",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box sx={{ mr: 3, alignSelf: "flex-start" }}>{item.icon}</Box>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Outfit",
                fontWeight: 500,
                color: WHITE,
              }}
            >
              {item.blurb}
            </Typography>
          </Box>
        );
      })}
    </Container>
  );
};

export default OurTools;
