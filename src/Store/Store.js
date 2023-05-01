import { configureStore } from "@reduxjs/toolkit";
import ExpenseSlice, { ExpenseSliceAction } from "./ExpenseSlice";

const Store = configureStore({
  reducer: {
    expenseslice: ExpenseSlice.reducer,
  },
});

export default Store;
