import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLeaderBoard } from "../../Store/LeaderBoard-thunk";

const LeaderBoard = () => {
  const token = localStorage.getItem("token");
  const LeaderBoarddata = useSelector(
    (state) => state.expenseslice.LeaderBoard
  );
  const dispatch = useDispatch();
  const testfun = (token) => {
    console.log("test");
    dispatch(getLeaderBoard(token));
  };

  return (
    <div>
      <ul>
        <button onClick={() => testfun(token)}>Show LeaderBoard</button>
        {LeaderBoarddata.map((each) => (
          <li key={each.id} className="Leader-board">
            <span>Name:</span>
            <span>{each.name}</span>
            <span>Total Expenses:</span>
            <span>{each.totalCost ? each.totalCost : "NO Expense"}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeaderBoard;
