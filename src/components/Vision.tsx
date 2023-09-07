import { Container, Typography } from "@mui/material";
import React from "react";
import McEmailContainer from "./mail-chimp-forms/McEmailContainer.component";
import { themeColors } from "../constants/colors";
const VisionBar = () => {
  const { WHITE, LAVENDER } = themeColors;

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: LAVENDER,
        minHeight: 200,
        minWidth: "100%",
        px: 5,
        py: 5,
      }}
    >
      <Typography
        variant="h4"
        color={WHITE}
        sx={{ textAlign: "center", marginTop: 3, paddingX: 3 }}
      >
        Our Vision
      </Typography>
      <br />
      <Typography
        variant="h5"
        color={WHITE}
        sx={{ textAlign: "center", marginTop: 3, paddingX: 3 }}
      >
        Headless commerce, data unification, and full-stack monitoring for
        restaurants.
      </Typography>
      <br />
      <McEmailContainer />
    </Container>
  );
};

export default VisionBar;
