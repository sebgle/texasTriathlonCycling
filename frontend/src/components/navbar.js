import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import logo from "../assets/logo.png";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Detect screens smaller than medium (960px)
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerContent = (
    <List>
      <ListItem button>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Races" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Training" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Calendar" />
      </ListItem>
    </List>
  );

  return (
    <AppBar
      position="static"
      color="inherit"
      sx={{ boxShadow: "none", borderBottom: "1px solid #E0E0E0" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src={logo}
            alt="Longhorn Logo"
            style={{ width: "75px", height: "auto", marginRight: "16px" }}
          />
        </Box>

        {/* Desktop Navigation Links */}
        {!isMobile && (
          <Box sx={{ display: "flex", gap: "20px" }}>
            <Button color="inherit" sx={{ fontWeight: "bold" }}>
              Home
            </Button>
            <Button color="inherit">Races</Button>
            <Button color="inherit">Training</Button>
            <Button color="inherit">Calendar</Button>
          </Box>
        )}

        {/* User Information and Hamburger Menu */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {!isMobile && (
            <>
              <Typography variant="body1">User 01</Typography>
              <IconButton size="large" edge="end" color="inherit">
                <AccountCircleIcon />
              </IconButton>
            </>
          )}
          {/* Hamburger Menu Icon (visible on mobile) */}
          {isMobile && (
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Box>
      </Toolbar>

      {/* Drawer for Mobile Menu */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerContent}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
