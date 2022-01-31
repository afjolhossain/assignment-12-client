import React from "react";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { AppBar, Box, Button, CssBaseline, Divider } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const drawerWidth = 200;

const Dashboard = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const { admin } = useAuth();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <Link style={{ textDecoration: "none" }} to="/dashboard">
        <Button color="inherit">Dashboard</Button>
      </Link>
      <br />
      {admin && (
        <Box>
          <Link style={{ textDecoration: "none" }} to={`/dashboard/makeAdmin`}>
            <Button color="inherit">Make Admin</Button>
          </Link>
          <br />
          <Link
            style={{ textDecoration: "none" }}
            to={`/dashboard/addaservice`}
          >
            <Button color="inherit">Add Product</Button>
          </Link>
          <br />
          <Link
            style={{ textDecoration: "none" }}
            to={`/dashboard/manageAllOrder`}
          >
            <Button color="inherit">Manage All order</Button>
          </Link>
          <br />
          <Link
            style={{ textDecoration: "none" }}
            to={`/dashboard/manageProducts`}
          >
            <Button color="inherit">Manage-Products</Button>
          </Link>
          <br />
        </Box>
      )}

      <Link style={{ textDecoration: "none" }} to={`/dashboard/pay`}>
        <Button color="inherit">Pay</Button>
      </Link>
      <br />

      <Link style={{ textDecoration: "none" }} to={`/dashboard/clientReview`}>
        <Button color="inherit">Review</Button>
      </Link>
      <br />
      <Link style={{ textDecoration: "none" }} to={`/dashboard/myOrder`}>
        <Button color="inherit">My Order</Button>
      </Link>

      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
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
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
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
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet></Outlet>
      </Box>
    </Box>
  );
};

export default Dashboard;
