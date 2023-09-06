import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { themeColors } from "../constants/colors";
import useWindowDimensions from "../hooks/UseWindowDimensions";

const Mission = () => {
  const matches = useMediaQuery("(min-width:700px)");

  const { WHITE } = themeColors;
  return (
    <Box
      sx={{
        textAlign: "center",
        display: "flex",
        flexDirection: matches ? "row" : "column"
      }}
    >
      <Box
        sx={{
          maxWidth: matches ? 280 : "auto",
          backgroundColor: "#533897",
          color: WHITE,
          padding: 3,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Outfit",
            fontWeight: 300,
          }}
        >
          OUR MISSION:
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Outfit",
            fontWeight: 500,
          }}
        >
          TO SUPPORT RESTAURANTS WITH THEIR TECHNOLOGY TODAY WHILE EMPOWERING THE SOLUTIONS OF TOMORROW
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 3,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontFamily: "Outfit",
            fontWeight: 500,
            color: "#533897",
            marginRight: 2
          }}
        >
          24
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Outfit",
            fontWeight: 500,
            maxWidth: 700,
          }}
        >
          Billion $ is what restaurants in North America spend annually on
          technology. Annual forecast predict this number will grow 5-10% annually
        </Typography>
      </Box>
    </Box>
  );
};

export default Mission;
