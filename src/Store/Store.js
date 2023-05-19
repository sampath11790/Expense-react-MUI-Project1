import { configureStore } from "@reduxjs/toolkit";
import ExpenseSlice, { ExpenseSliceAction } from "./ExpenseSlice";
import ThemeSlice from "./Themeslice";

const Store = configureStore({
  reducer: {
    expenseslice: ExpenseSlice.reducer,
    themeslice: ThemeSlice.reducer,
  },
});

export default Store;
