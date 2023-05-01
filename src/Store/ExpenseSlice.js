import { createSlice } from "@reduxjs/toolkit";

var a = {
  data: [],
  iscall: true,
};
const ExpenseSlice = createSlice({
  initialState: a,
  name: "expenseslice",
  reducers: {
    setSentData(state, action) {
      // state.sendMail = !state.sendMail;
      // state.count = state.count + 1;
      let temp = [...action.payload];
      state.data = temp;

      console.log("success");
    },
    callgetFunction(state, action) {
      state.iscall = !state.iscall;
    },
  },
});

export const ExpenseSliceAction = ExpenseSlice.actions;
export default ExpenseSlice;
