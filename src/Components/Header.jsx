import { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

const menuOptions = [
  { text: "Home", path: "/" },
  { text: "Enroll a Student", path: "/student" },
  { text: "Become a Tutor", path: "/tutor" },
  { text: "Services", path: "/services" },
  { text: "Testimonies", path: "/testimonies" },
  { text: "Contact", path: "/contact" },
  { text: "Sign In", path: "/signin" },
];

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#fff", color: "#000" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo and Brand Name */}
          <Link to="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <img src={logo} alt="Logo" style={{ height: 40, marginRight: 10 }} />
            <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
              Tutor Platform
            </Typography>
          </Link>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {menuOptions.map((item) => (
              <Button
                key={item.text}
                component={Link}
                to={item.path}
                sx={{ color: "#000", fontWeight: 500 }}
              >
                {item.text}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={() => setOpenMenu(true)}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={openMenu} onClose={() => setOpenMenu(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={() => setOpenMenu(false)}>
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton component={Link} to={item.path}>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
