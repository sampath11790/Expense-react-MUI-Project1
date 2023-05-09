import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLeaderBoard } from "../../Store/LeaderBoard-thunk";
import "./Leaderboard.css";
import { Avatar, Box, Button, Grid, Paper, Table } from "@mui/material";

const LeaderBoard = () => {
  const LeaderBoarddata = useSelector(
    (state) => state.expenseslice.LeaderBoard
  );
  const dispatch = useDispatch();
  const testfun = () => {
    console.log("testing");
    const token = localStorage.getItem("token");
    console.log("test");
    dispatch(getLeaderBoard(token));
  };

  return (
    <div>
      {/* <ul> */}
      <Button variant="contained" onClick={() => testfun()}>
        Show LeaderBoard
      </Button>
      <Box>
        <Grid
          container
          spacing={1}
          // xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { sx: "start", sm: "center", md: "center" },
          }}
        >
          {LeaderBoarddata.map((each) => (
            <Grid item xs={3}>
              <Paper
                sx={{
                  p: 1,
                  bgcolor: "lightgreen",
                  display: "grid",
                  gridTemplateColumns: { md: "fr 2fr" },
                  gap: 2,
                  width: 300,
                }}
              >
                Name= {each.name}----totalCost =
                {each.totalcost ? each.totalcost : "NO Expense"}
                {/* <Avatar
                  alt="Remy Sharp"
                  src="https://th.bing.com/th/id/OIP.eCku7oyJZE8mOT6nRRUq0QHaKL?w=185&h=254&c=7&r=0&o=5&pid=1.7"
                  sx={{ width: 34, height: 34 }}
                /> */}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default LeaderBoard;