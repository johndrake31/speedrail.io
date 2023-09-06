import React from "react";
import { Box } from "@mui/material";
import logoSvg from "../assets/spokesolve_no_bg.svg";
import titleText from "../assets/ss_title.png";
import { themeColors } from "../constants/colors";

const LogoSlogan = () => {
  const { WHITE } = themeColors;
  return (
    <Box
      sx={{
        backgroundColor: "#5336579f",
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
          borderRadius: "50%",
          backgroundColor: WHITE,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 5,
        }}
      >
        <img
          src={logoSvg}
          className="App-logo"
          alt="logo"
          width={"60%"}
          style={{ marginRight: "auto", marginLeft: "auto" }}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <img
            src={titleText}
            alt="Spoke Solve Title"
            width={ "60%"}
            style={{ marginRight: "auto", marginLeft: "auto" }}
          />
         
        </Box>
      </Box>
    </Box>
  );
};

export default LogoSlogan;
