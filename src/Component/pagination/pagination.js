import React, { useEffect, useState } from "react";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { getallExpense } from "../../Store/Expense-thunk";
import DropDownExpense from "../Dropdown/Dropdown";
import { Box } from "@mui/material";
import { ExpenseSliceAction } from "../../Store/ExpenseSlice";
let iscall = false;
export default function PaginationList({ count, totalcount }) {
  const [Page, setPage] = useState(1);
  const [pageCount, setPagecount] = useState(0);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  // const expenses = useSelector((state) => state.expenseslice);

  React.useEffect(() => {
    if (iscall == true) {
      dispatch(getallExpense(token, Page, pageCount));
      dispatch(ExpenseSliceAction.updatePage(Page));
      dispatch(ExpenseSliceAction.updatePageCount(pageCount));
      return;
    }

    iscall = true;
    return;
  }, [Page, pageCount]);
  // React.useEffect(() => {
  //   setPage(1);
  // }, [currentpage]);
  const pageHandler = (e, value) => {
    // return (e) => {
    e.preventDefault();

    setPage(value);
  };
  return (
    <Box display={"flex"} flexDirection={"row"}>
      <DropDownExpense
        totalcount={totalcount}
        page={Page}
        pageCount={pageCount}
        setPagecount={setPagecount}
      ></DropDownExpense>
      <Stack spacing={12}>
        <Pagination
          defaultPage={1}
          count={count}
          onChange={pageHandler}
          page={Page || 0}
          variant="outlined"
          shape="rounded"
        ></Pagination>
      </Stack>
    </Box>
  );
}
