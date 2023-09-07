import React from "react";
import { Box } from "@mui/material";
import Mission from "./Mission";
import VisionBar from "./Vision";
import OurJourney from "./OurJourney";
// 88	43	144
const Home = () => {

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Mission />
      </Box>
      <VisionBar />
      <OurJourney />
    </>
  );
};

export default Home;
