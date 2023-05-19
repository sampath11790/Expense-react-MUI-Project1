import React from "react";
import { useNavigate } from "react-router-dom";
import { CloudDownload } from "@mui/icons-material";
import { Box, ListItemText } from "@mui/material";
import { useSelector } from "react-redux";
const DownloadButton = (props) => {
  const navigate = useNavigate();

  const LeaderBoarddata = useSelector(
    (state) => state.expenseslice.LeaderBoard
  );
  // console.log("premium component ", LeaderBoarddata);
  const token = localStorage.getItem("token");
  const ispremium = localStorage.getItem("ispremium");
  const DownloadallLinks = async () => {
    try {
      const response = await fetch("http://localhost:5004/expense/download", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      const fetcheddata = await response.json();
      // console.log(fetcheddata);
      navigate("/expense/download", { state: fetcheddata.bucket });
    } catch (error) {
      console.error(error);
      return;
    }
  };

  return ispremium == "true" ? (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
      onClick={DownloadallLinks}
    >
      <ListItemText primary={"Download"} />
      <CloudDownload></CloudDownload>
    </Box>
  ) : (
    <div></div>
  );
};

export default DownloadButton;
