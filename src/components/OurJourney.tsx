import { Container, Typography, Button, Link, useMediaQuery } from "@mui/material";
import React from "react";
import { themeColors } from "../constants/colors";

const OurJourney = () => {
  const { WHITE, PRIME_BLUE } = themeColors;
  const matches = useMediaQuery("(min-width:850px)");

  return (
    <Container
      sx={{
        borderTop: matches ? "none" : 1,
        borderTopColor: matches? "none": WHITE, 
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: PRIME_BLUE,
        minHeight: 200,
        width: "100%",
        px: 5,
        py: 5,
      }}
    >
      <Typography
        variant="h4"
        color={WHITE}
        sx={{ textAlign: "center", marginTop: 3, paddingBottom: 3 }}
      >
        Be part of our journey.
      </Typography>
      <br />
      <Typography
        variant="h6"
        color={WHITE}
        sx={{
          textAlign: "center",
          marginTop: 3,
          paddingX: 3,
        }}
      >
        Our monitoring & alerting for restaurants is in pilot. Book a demo and
        secure your spot.
      </Typography>
      <Button
        color="inherit"
        size="medium"
        sx={{ my: 3, color: WHITE, fontSize: 20 }}
        variant="outlined"
      >
        <Link
          href="https://calendly.com/jeremy-spokesolve/30min"
          color="inherit"
          underline="none"
          sx={{ textAlign: "center", border: "" }}
          target="_blank"
          rel="noopener"
          fontSize={20}
        >
          Book a demo
        </Link>
      </Button>
    </Container>
  );
};

export default OurJourney;
