import React, { useContext, useEffect, useState } from "react";
import ListItem from "../listItem.js/listItem";
// import FormItem from "../Form/Form";
import { useDispatch, useSelector } from "react-redux";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import { Table } from "@mui/material";
import LeaderBoard from "../../LeaderBoard/LeaderBoard";
import { getallExpense } from "../../../Store/Expense-thunk";
import { getLeaderBoard } from "../../../Store/LeaderBoard-thunk";
import { useNavigate } from "react-router-dom";

const ExpenseList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.expenseslice.data);
  const LeaderBoarddata = useSelector(
    (state) => state.expenseslice.LeaderBoard
  );

  const navigate = useNavigate();
  const call = useSelector((state) => state.expenseslice.iscall);
  const ispremium = localStorage.getItem("ispremium");
  useEffect(() => {
    const token = localStorage.getItem("token");
    const ispremium = localStorage.getItem("ispremium");
    if (ispremium === "true") {
      dispatch(getallExpense(token));
      dispatch(getLeaderBoard(token));
    } else {
      dispatch(getallExpense(token));
    }
  }, [call]);

  // const ctx = useContext(ExpenseContext);
  // console.log(ctx.data);
  return (
    <div>
      {/* <FormItem></FormItem> */}
      <ExpenseForm></ExpenseForm>

      <Table
        stripe="odd"
        hoverRow
        sx={{ width: { sm: "100%", md: "60%" }, m: "0 auto", mt: 10 }}
      >
        <thead>
          <tr className="some">
            {/* <th>Date</th> */}
            <th>Name</th>
            <th>Description</th>
            <th>Amount&nbsp;(Rs)</th>
            <th>Button&nbsp;(icon)</th>
          </tr>
        </thead>
        <tbody>
          {[...data].map((each) => (
            // {initial.map((each) => (
            <ListItem key={each.id} item={each}></ListItem>
          ))}
        </tbody>
      </Table>

      {ispremium == "true" && <LeaderBoard></LeaderBoard>}

      {}
    </div>
  );
};

export default ExpenseList;
