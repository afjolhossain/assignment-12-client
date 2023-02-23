import logo from "../../../images/logo.jpg";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Navigation = () => {
  const { user, logOut } = useAuth();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar
      elevation={0}
      sx={{
        backgroundColor: "#0093E9",
        backgroundImage: "linear-gradient(181deg, #0093E9 0%, #80D0C7 100%)",
      }}
      position="static"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            noWrap
            component="div"
            sx={{
              display: { xs: "none", md: "flex" },
              marginLeft: "50px",
            }}
          >
            <NavLink to="/">
              <img
                style={{ width: "80px", height: "50px" }}
                src={logo}
                alt=""
              />
            </NavLink>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <NavLink
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontWeight: "700px",
                  }}
                  to="/"
                >
                  <Typography textAlign="center">Home</Typography>
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontWeight: "700px",
                  }}
                  to="/exploreHome"
                >
                  <Typography textAlign="center">Products</Typography>
                </NavLink>
              </MenuItem>
            </Menu>
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <NavLink to="/">
              <img
                style={{ width: "80px", height: "50px" }}
                src={logo}
                alt=""
              />
            </NavLink>
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", justifyContent: "flex-end" },
              marginRight: "50px",
            }}
          >
            <NavLink style={{ textDecoration: "none" }} to="/">
              <Box
                style={{
                  color: "black",
                  marginRight: 30,
                  textTransform: "capitalize",
                  fontSize: "17px",
                }}
              >
                HOME
              </Box>
            </NavLink>

            <NavLink style={{ textDecoration: "none" }} to="/exploreHome">
              <Box
                style={{
                  color: "black",
                  marginRight: 30,
                  textTransform: "capitalize",
                  fontSize: "17px",
                }}
              >
                PRODUCTS
              </Box>
            </NavLink>

            <NavLink style={{ textDecoration: "none" }} to="/contact-us">
              <Box
                style={{
                  color: "black",
                  textTransform: "capitalize",
                  fontSize: "17px",
                }}
              >
                CONTACT-US
              </Box>
            </NavLink>
          </Box>

          {user ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title={user?.displayName}>
                <IconButton onClick={handleOpenUserMenu}>
                  <Avatar alt={user?.displayName} src={user.photoURL} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  {user.email ? (
                    <Box style={{ textDecoration: "none" }}>
                      <Typography
                        style={{ color: "black" }}
                        onClick={logOut}
                        textAlign="center"
                      >
                        Logout
                      </Typography>
                      <MenuItem onClick={handleCloseUserMenu}>
                        <NavLink
                          style={{ textDecoration: "none" }}
                          to="/dashboard"
                        >
                          <Typography
                            style={{ color: "black" }}
                            textAlign="center"
                          >
                            Dashboard
                          </Typography>
                        </NavLink>
                      </MenuItem>
                    </Box>
                  ) : (
                    <NavLink style={{ textDecoration: "none" }} to="/login">
                      <Typography style={{ color: "black" }} textAlign="center">
                        Login
                      </Typography>
                    </NavLink>
                  )}
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <NavLink style={{ textDecoration: "none" }} to="/login">
              <Button
                sx={{
                  flexGrow: 0,
                  marginRight: { lg: "100px" },
                  backgroundColor: "black",
                  ":hover": { backgroundColor: "black" },
                  py: 1,
                  px: 3,
                }}
                variant="contained"
              >
                <Typography
                  style={{ color: "white", textTransform: "capitalize" }}
                  textAlign="center"
                >
                  Login
                </Typography>
              </Button>
            </NavLink>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navigation;
