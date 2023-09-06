import React from "react";
import { Route, Routes } from "react-router-dom";
import Team from "../components/Team";
import Home from "../components/Home";
import { NavRoutes } from "../constants/routes";
import Header from "../components/Header";

const NavRouter: React.FC = () => {
  const { HOME, TEAM } = NavRoutes;
  return (
    <Routes>
      <Route
        path={HOME}
        element={
          <>
            <Header />
            <Home />
          </>
        }
      />
      <Route
        path={TEAM}
        element={
          <>
            <Header />
            <Team />
          </>
        }
      />
      <Route
        path="*"
        element={
          <>
            <Header />
            <Home />
          </>
        }
      />
    </Routes>
  );
};

export default NavRouter;
