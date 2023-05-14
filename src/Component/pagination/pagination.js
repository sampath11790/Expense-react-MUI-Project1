import React, { useEffect, useState } from "react";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useDispatch } from "react-redux";
import { getallExpense } from "../../Store/Expense-thunk";

export default function PaginationList({ page: currrentpage }) {
  const [Page, setPage] = useState(1);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getallExpense(token, Page));
  }, [Page]);
  const pageHandler = (e, value) => {
    // return (e) => {
    e.preventDefault();

    setPage(value);
  };
  return (
    <Stack spacing={12}>
      <Pagination
        count={currrentpage}
        onChange={pageHandler}
        page={Page}
        variant="outlined"
        shape="rounded"
      ></Pagination>
    </Stack>
  );
}
