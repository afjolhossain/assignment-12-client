import React from "react";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { AppBar, Box, Button, CssBaseline } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import DashboardProfile from "../DashboardProfile/DashboardProfile";
import Navigation from "../../Pages/Shared/Navigation/Navigation";

const drawerWidth = 200;

const Dashboard = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // const { admin } = useAuth();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div
      style={{
        display: "grid",
        gridAutoColumns: "1 1fr",
        rowGap: "10px",
        padding: "10px",
        textAlign: "start",
        marginTop: "50px",
      }}
    >
      <Link style={{ textDecoration: "none" }} to={`/dashboard/makeAdmin`}>
        <Button
          style={{
            width: "100%",
            color: "white",
            backgroundImage:
              "linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)",
            fontWeight: "900px",
            fontFamily: "serif",
            height: "60px",
          }}
        >
          Make Admin
        </Button>
      </Link>

      <Link style={{ textDecoration: "none" }} to={`/dashboard/pay`}>
        <Button
          style={{
            width: "100%",
            color: "white",
            backgroundImage:
              "linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)",
            fontWeight: "900px",
            fontFamily: "serif",
            height: "60px",
          }}
        >
          Pay
        </Button>
      </Link>

      <Link style={{ textDecoration: "none" }} to={`/dashboard/clientReview`}>
        <Button
          style={{
            width: "100%",
            color: "white",
            backgroundImage:
              "linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)",
            fontWeight: "900px",
            fontFamily: "serif",
            height: "60px",
          }}
        >
          Review
        </Button>
      </Link>
      <Link style={{ textDecoration: "none" }} to={`/dashboard/manageAllOrder`}>
        <Button
          style={{
            width: "100%",
            color: "white",
            backgroundImage:
              "linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)",
            fontWeight: "900px",
            fontFamily: "serif",
            height: "60px",
          }}
        >
          Manage All order
        </Button>
      </Link>
      <Link style={{ textDecoration: "none" }} to={`/dashboard/myOrder`}>
        <Button
          style={{
            width: "100%",
            color: "white",
            backgroundImage:
              "linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)",
            fontWeight: "900px",
            fontFamily: "serif",
            height: "60px",
          }}
        >
          My Order
        </Button>
      </Link>
      <Link style={{ textDecoration: "none" }} to={`/dashboard/addaservice`}>
        <Button
          style={{
            width: "100%",
            color: "white",

            backgroundImage:
              "linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)",
            fontWeight: "900px",
            fontFamily: "serif",
            height: "60px",
          }}
        >
          Add Product
        </Button>
      </Link>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <CssBaseline />

      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundImage:
            "linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
        }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#00679A",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          marginTop: 10,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <DashboardProfile></DashboardProfile>
        <Outlet></Outlet>
      </Box>
    </Box>
  );
};

export default Dashboard;
