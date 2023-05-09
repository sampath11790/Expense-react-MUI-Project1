import { ExpenseSliceAction } from "./ExpenseSlice";

const transformData = async (data) => {
  let value = [];
  for (let key in data) {
    value.push(data[key]);
    // console.log(data[key]);
  }
  return value;
};

export const getLeaderBoard = (token) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `http://localhost:5004/premium/leaderboard`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
      const data = await response.json();
      console.log("leaderboard data", data);
      const transData = await transformData(data);
      // console.log("transData", transData);
      //calling get function by change use effect value
      dispatch(ExpenseSliceAction.updateLeaderBoard(transData));
      // console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
};
