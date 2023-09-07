import React from "react";
import { Box } from "@mui/material";

import titleText from "../assets/speedrail_io.svg";
import { themeColors } from "../constants/colors";

const LogoSlogan = () => {
  const { WHITE, PRIME_BLUE_OP } = themeColors;
  return (
    <Box
      sx={{
        backgroundColor: PRIME_BLUE_OP,
        height: "100%",
        minHeight: 300,
        padding: 3,
      }}
    >
      <Box
        sx={{
          maxWidth: 200,
          maxHeight: 200,
          width: 200,
          height: 200,

          backgroundColor: WHITE,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 5,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <img
            src={titleText}
            alt="Spoke Solve Title"
            width={"100%"}
            style={{ marginRight: "auto", marginLeft: "auto" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default LogoSlogan;
