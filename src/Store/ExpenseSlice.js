import { createSlice } from "@reduxjs/toolkit";

var a = {
  data: [],
  LeaderBoard: [],
  iscall: true,
  count: 0,
  totalcount: 0,
  // currentpage: 1,
  pageCount: 5,
  page: 1,
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
      state.count = action.payload.count;
      state.totalcount = action.payload.totalcount;
      // state.currentpage = 1;
      console.log("success");
    },
    callgetFunction(state, action) {
      state.iscall = !state.iscall;
    },
    updateLeaderBoard(state, action) {
      state.LeaderBoard = [...action.payload];
    },
    updatePage(state, action) {
      state.page = action.payload;
    },
    updatePageCount(state, action) {
      state.pageCount = action.payload || 5;
    },
  },
});

export const ExpenseSliceAction = ExpenseSlice.actions;
export default ExpenseSlice;
