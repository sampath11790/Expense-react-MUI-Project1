import React, { useContext, useEffect, useState } from "react";
import ListItem from "../listItem.js/listItem";
// import FormItem from "../Form/Form";
import { useDispatch, useSelector } from "react-redux";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import { Pagination, Table } from "@mui/material";
import LeaderBoard from "../../LeaderBoard/LeaderBoard";
import { getallExpense } from "../../../Store/Expense-thunk";
import { getLeaderBoard } from "../../../Store/LeaderBoard-thunk";
import { useNavigate } from "react-router-dom";
import PaginationList from "../../pagination/pagination";

const ExpenseList = () => {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expenseslice);
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
      // dispatch(getallExpense(token));
      console.log(
        "call time page,pagecount",
        expenses.page,
        expenses.pageCount
      );
      console.log("is premium true");
      dispatch(getallExpense(token, expenses.page, expenses.pageCount));
      dispatch(getLeaderBoard(token));
    } else {
      console.log("is premium false ");
      // dispatch(getallExpense(token));
      dispatch(getallExpense(token, expenses.page, expenses.pageCount));
    }
  }, [call]);

  // const ctx = useContext(ExpenseContext);
  // console.log(ctx.data);
  return (
    <div>
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
          {[...expenses.data].map((each) => (
            // {initial.map((each) => (
            <ListItem key={each.id} item={each}></ListItem>
          ))}
        </tbody>
      </Table>
      <div className="pagination-cont">
        <PaginationList count={expenses.count}></PaginationList>
      </div>

      <div>{ispremium == "true" && <LeaderBoard></LeaderBoard>}</div>

      {/* <Pagination count={10} variant="outlined" shape="rounded" /> */}
    </div>
  );
};

export default ExpenseList;
