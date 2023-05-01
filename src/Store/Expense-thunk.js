import { ExpenseSliceAction } from "./ExpenseSlice";

export const postData = (obj) => {
  return async (dispatch) => {
    try {
      const jsondata = JSON.stringify(obj);
      const response = await fetch("http://localhost:5004/post-product", {
        method: "POST",
        body: jsondata,
        headers: {
          "Content-Type": "application/json",
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

export const getallExpense = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:5004/expense", {
        method: "GET",

        headers: {
          "Content-Type": "application/json",
        },
      });
      const fetcheddata = await response.json();
      console.log(fetcheddata);
      //want send proper data here we are getting array
      dispatch(ExpenseSliceAction.setSentData(fetcheddata));
    } catch (error) {
      console.error(error);
    }
  };
};

export const deleteItem = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:5004/post-product/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      //calling get function by change use effect value
      dispatch(ExpenseSliceAction.callgetFunction());
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
};
