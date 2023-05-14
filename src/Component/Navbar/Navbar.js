import React from "react";
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import MenuIcon from "@mui/icons-material/Menu";
import { Button, ListItem, Stack } from "@mui/material";
import Premium from "../Premium/Premium";
import Logout from "../logout/logout";
import DownloadButton from "../Downloadbutton/downloadbutton";
import { useNavigate } from "react-router-dom";

const PrimarySearchAppBar = () => {
  const navigate = useNavigate();
  return (
    // <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="medium"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 0 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          Expense tracker
        </Typography>
        <Stack
          sx={{
            // width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            // justifyContent: "space-around",
          }}
        >
          <ListItem onClick={() => navigate("/expenselist")}>
            <Button variant="string"> Expense</Button>
          </ListItem>
          <ListItem onClick={() => navigate("/viewreport")}>
            <Button variant="string"> View Report</Button>
          </ListItem>
          <ListItem>
            <Premium></Premium>
          </ListItem>
          <ListItem>
            <Button variant="string">
              {" "}
              <DownloadButton></DownloadButton>
            </Button>
          </ListItem>
        </Stack>
        <Logout></Logout>
      </Toolbar>
    </AppBar>
  );
};

export default PrimarySearchAppBar;
