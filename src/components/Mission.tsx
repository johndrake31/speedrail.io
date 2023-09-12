import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { themeColors } from "../constants/colors";

const Mission = () => {
  const matches = useMediaQuery("(min-width:700px)");

  const { WHITE, PRIME_BLUE, } = themeColors;
  return (
    <Box
      sx={{
        textAlign: "center",
        display: "flex",
        flexDirection: matches ? "row" : "column",
      }}
    >
      <Box
        sx={{
          maxWidth: matches ? 280 : "auto",
          backgroundColor: PRIME_BLUE,
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
          TO SUPPORT RESTAURANTS WITH THEIR TECHNOLOGY TODAY WHILE EMPOWERING
          THE SOLUTIONS OF TOMORROW
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: WHITE,
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          // justifyContent: "center",
          // alignItems: "center",
          padding: 3,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Outfit",
            fontWeight: 300,
            color: PRIME_BLUE,
            paddingTop: 2,
            marginBottom: 2,
          }}
        >
          Focus on what truly matters, taking care of your guests
        </Typography>
        <Typography variant="h6" sx={{}}>
          Be the first to know when tech fails instead of after a bad guest experience or an angry staff phone call
        </Typography>
      </Box>
    </Box>
  );
};

export default Mission;




