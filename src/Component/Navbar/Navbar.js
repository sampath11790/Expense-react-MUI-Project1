import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import { ThemeSliceAction } from "../../Store/Themeslice";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Button,
  ListItem,
  ListItemText,
  Stack,
  List,
  Drawer,
  Box,
} from "@mui/material";
import Premium from "../Premium/Premium";
import Logout from "../logout/logout";
import DownloadButton from "../Downloadbutton/downloadbutton";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
const PrimarySearchAppBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isNightMode, setIsNightMode] = useState(false);

  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.themeslice.ActiveMode);
  const LeaderBoarddata = useSelector(
    (state) => state.expenseslice.LeaderBoard
  );
  const ispremium = localStorage.getItem("ispremium");

  const navigate = useNavigate();
  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };
  const menuItems = [
    { label: "Expense", path: "/expenselist" },
    { label: "View Report", path: "/viewreport" },
    { component: <Premium /> },
    {
      component: <DownloadButton />,
    },
    {
      component: <Logout />,
      path: "/",
    },
  ];
  const toggleNightMode = () => {
    dispatch(ThemeSliceAction.Themetoggle(true));
    setIsNightMode((prevMode) => !prevMode);
  };
  return (
    <>
      <AppBar position="static">
        <Toolbar
          sx={{
            padding: { xs: 1 },
          }}
        >
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{
              m: 1,
              mr: { xs: 5, sm: 0 },
              display: { xs: "block", sm: "block", md: "none" },
            }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" width={200}>
            Expense tracker
          </Typography>
          <Stack
            sx={{
              width: "100%",
              display: { xs: "none", sm: "none", md: "block" },
              flexDirection: "row",
              alignItems: "center",

              justifyContent: "space-around",
            }}
          >
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              {menuItems.map((item, index) => (
                <ListItem
                  key={index}
                  sx={{ display: item.display }}
                  component={NavLink}
                  to={item.path}
                  exact
                  activeClassName="activeNavLink"
                  className="navLink"
                >
                  {item.label && <ListItemText primary={item.label} />}
                  {item.component}
                </ListItem>
              ))}
              {ispremium == "true" && (
                <IconButton
                  // color="inherit"
                  aria-label="toggle night mode"
                  onClick={toggleNightMode}
                  sx={{
                    color: isDarkMode ? "black" : "black",
                    background: isDarkMode ? "white" : "inhert",
                  }}
                >
                  {isNightMode ? <Brightness4Icon /> : <Brightness7Icon />}
                  {isNightMode ? "Light Mode" : "Dark Mode"}
                </IconButton>
              )}
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // color: isDarkMode ? "white" : "#000000",
          }}
        >
          {menuItems.map((item, index) => (
            <ListItem
              key={index}
              component={NavLink}
              to={item.path}
              exact
              activeClassName="activeNavLink"
              className="navLink"
            >
              <ListItemText primary={item.label} />
              {item.component}
            </ListItem>
          ))}
          {ispremium == "true" && (
            <IconButton
              // color="inherit"
              aria-label="toggle night mode"
              onClick={toggleNightMode}
              sx={{
                color: isDarkMode ? "white" : "#000000",
              }}
            >
              {isNightMode ? <Brightness4Icon /> : <Brightness7Icon />}
              {isNightMode ? "Light" : "Dark"}
            </IconButton>
          )}
        </List>
      </Drawer>
    </>
  );
};

export default PrimarySearchAppBar;
