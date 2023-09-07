import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { themeColors } from "../constants/colors";

const Mission = () => {
  const matches = useMediaQuery("(min-width:700px)");

  const { WHITE, PRIME_BLUE } = themeColors;
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
            color: PRIME_BLUE,
            marginRight: 2,
          }}
        >
          25X
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Outfit",
            fontWeight: 500,
            maxWidth: 700,
            textAlign: "left",
          }}
        >
          Did you know that it costs up to 25X more to acquire a new customer
          than to retain an existing one?
        </Typography>
      </Box>
    </Box>
  );
};

export default Mission;
