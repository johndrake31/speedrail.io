import React from "react";
import { Box, Typography } from "@mui/material";
import Mission from "./Mission";
import VisionBar from "./VisionBar";
import OurJourney from "./OurJourney";
import useMediaQuery from "@mui/material/useMediaQuery";
import OurTools from "./OurTools";
import { themeColors } from "../constants/colors";  
const Home = () => {
  const matches = useMediaQuery("(min-width:850px)");
  const { PRIME_BLUE } = themeColors;
  return (
    <>

      <Mission />
      <Typography
        variant="h4"
        color={PRIME_BLUE}
        sx={{ textAlign: "center", marginY: 5, alignSelf: "center" }}
      >
        What we are building for you.
      </Typography>
      <OurTools />
      <Box sx={{ display: "flex", flexDirection: matches ? "row" : "column" }}>
        <VisionBar />
        <OurJourney />
      </Box>
    </>
  );
};

export default Home;
