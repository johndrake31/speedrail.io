import { useNavigate } from "react-router-dom";
import {
  BottomNavigation,
  BottomNavigationAction,
  Container,
  Paper,
} from "@mui/material";
import React, { useEffect } from "react";
import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
import { NavRoutes } from "../constants/routes";
import { themeColors } from "../constants/colors";
const NavBar = () => {

  const { HOME, TEAM } = NavRoutes;
  const [routeValue, setValue] = React.useState('');
  const navigate = useNavigate();
  
const { PEACH } = themeColors;

  useEffect(() => {   
    navigate(routeValue);
  }, [navigate, routeValue]);

  return (
    <Container
      sx={{
        minWidth: "100%",
        marginTop: 5,
      }}
    >
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={routeValue}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{
            "& .Mui-selected, .Mui-selected > svg": {
              color: PEACH
            }
        }}
        >
          <BottomNavigationAction
            label="Home"
            icon={<HomeIcon />}
            value={HOME}
          />
          <BottomNavigationAction
            label="Team"
            icon={<GroupsIcon />}
            value={TEAM}
          />
        </BottomNavigation>
      </Paper>
    </Container>
  );
};

export default NavBar;
