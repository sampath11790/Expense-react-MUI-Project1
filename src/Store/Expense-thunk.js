import LeaderBoard from "../Component/LeaderBoard/LeaderBoard";
import { ExpenseSliceAction } from "./ExpenseSlice";

export const postData = (obj, token) => {
  return async (dispatch) => {
    try {
      const jsondata = JSON.stringify(obj);
      const response = await fetch("http://localhost:5004/post-product", {
        method: "POST",
        body: jsondata,
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      const data = await response.json();
      console.log(data);
      //calling get function by change use effect value
      dispatch(ExpenseSliceAction.callgetFunction());
      // dispatch(ExpenseSliceAction.setSentData(data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const getallExpense = (token, page = 1, pageCount = 5) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `http://localhost:5004/expense?page=${page}&pageCount=${pageCount}`,
        {
          method: "GET",

          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
      const fetcheddata = await response.json();
      console.log("fetcheddata", fetcheddata);
      //want send proper data here we are getting array
      dispatch(ExpenseSliceAction.setSentData(fetcheddata));
      // if (ispremium) {
      //   dispatch(LeaderBoard(token));
      // }
    } catch (error) {
      console.error(error);
      return;
    }
  };
};

export const deleteItem = (id, token) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:5004/post-product/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      const data = await response.json();
      //calling get function by change use effect value
      dispatch(ExpenseSliceAction.callgetFunction());
      // if (ispremium) {
      //   dispatch(LeaderBoard(token));
      // }

      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
};
