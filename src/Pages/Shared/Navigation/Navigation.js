import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "../../../images/logo.jpg";
import { NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#212121" }}>
        <Toolbar>
          <img style={{ width: "80px", height: "50px" }} src={logo} alt="" />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <NavLink
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: 700,
            }}
            to="/dashboard"
          >
            <Button color="inherit">Dashboard</Button>
          </NavLink>

          <NavLink
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: 700,
            }}
            to="/exploreHome"
          >
            <Button color="inherit">Explores</Button>
          </NavLink>
          {user?.email ? (
            <Button onClick={logOut} color="inherit">
              LogOut
            </Button>
          ) : (
            <NavLink
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: 700,
              }}
              to="login"
            >
              <Button color="inherit">Login</Button>
            </NavLink>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
