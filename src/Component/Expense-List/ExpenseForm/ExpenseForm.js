import React, { useContext, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { postData } from "../../../Store/Expense-thunk";

const Initial_state = { name: "", description: "", amount: "" };
const ExpenseForm = () => {
  const [enteredInput, setenteredInput] = useState(Initial_state);
  const Expense = useSelector((state) => state.expenseslice.data);
  console.log("updated data===>", Expense);
  const Dispatch = useDispatch();

  const addEnteredInput = (e) => {
    setenteredInput({ ...enteredInput, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    Dispatch(postData(enteredInput));
  };

  return (
    <div>
      <label>Name</label>
      <br />
      <input
        type="text"
        value={enteredInput.name}
        name="name"
        onChange={addEnteredInput}
      ></input>
      <br />
      <label>Description</label>
      <br />
      <input
        type="text"
        value={enteredInput.description}
        name="description"
        onChange={addEnteredInput}
      ></input>
      <br />
      <label>Amount</label>
      <br />
      <input
        type="number"
        value={enteredInput.amount}
        name="amount"
        onChange={addEnteredInput}
      ></input>
      <br />
      <button onClick={submitHandler}>Add Product</button>
      <br />
    </div>
  );
};

export default ExpenseForm;
