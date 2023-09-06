import { Container } from "@mui/material";
import React from "react";
import restTech from "../assets/resto_tech.jpeg";
import LogoSlogan from "./LogoSlogan";

const Header = () => {
  return (
    <Container
      disableGutters
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundImage: `url(${restTech})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minWidth: "100%",
      }}
    >
      <LogoSlogan />
    </Container>
  );
};

export default Header;
