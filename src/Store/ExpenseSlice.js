import { createSlice } from "@reduxjs/toolkit";

var a = {
  data: [],
  LeaderBoard: [],
  iscall: true,
  page: 0,
};
const ExpenseSlice = createSlice({
  initialState: a,
  name: "expenseslice",
  reducers: {
    setSentData(state, action) {
      // state.sendMail = !state.sendMail;
      // state.count = state.count + 1;
      let temp = [...action.payload.data];
      state.data = temp;
      state.page = action.payload.page;

      console.log("success");
    },
    callgetFunction(state, action) {
      state.iscall = !state.iscall;
    },
    updateLeaderBoard(state, action) {
      state.LeaderBoard = [...action.payload];
    },
  },
});

export const ExpenseSliceAction = ExpenseSlice.actions;
export default ExpenseSlice;
