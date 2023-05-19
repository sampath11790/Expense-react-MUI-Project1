import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../Context/Usercontext";
import { LoginOutlined } from "@mui/icons-material";
import { Box, ListItemText } from "@mui/material";
import { useDispatch } from "react-redux";
import { ThemeSliceAction } from "../../Store/Themeslice";

const Logout = () => {
  const ctx = useContext(UserContext); //setdefaulttheme
  const dispatch = useDispatch();
  const isPremium = localStorage.getItem("ispremium");
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.clear();
    ctx.authhandler();
    navigate("/");
    if (isPremium) {
      dispatch(ThemeSliceAction.setdefaulttheme());
    }
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
        onClick={logoutHandler}
      >
        <ListItemText primary={"Logout"} />
        <LoginOutlined></LoginOutlined>
      </Box>
    </>
  );
};

export default Logout;
