import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postData } from "../../../Store/Expense-thunk";
import { Button, TextField } from "@mui/material";
import { AddToQueueOutlined } from "@mui/icons-material";

const Initial_state = { name: "", description: "", amount: "" };
const ExpenseForm = () => {
  const [enteredInput, setenteredInput] = useState(Initial_state);
  const Expense = useSelector((state) => state.expenseslice.data);

  const token = localStorage.getItem("token");

  const Dispatch = useDispatch();

  const addEnteredInput = (e) => {
    setenteredInput({ ...enteredInput, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();

    Dispatch(postData(enteredInput, token));
  };
  return (
    <div style={{ marginTop: 10 }}>
      <TextField
        sx={{ m: 1.5, p: -10 }}
        type="text"
        // value={enteredInput.name}
        name="name"
        onChange={addEnteredInput}
        label="Name"
        variant="outlined"
      />
      <TextField
        sx={{ m: 1.5 }}
        type="text"
        // value={enteredInput.description}
        name="description"
        onChange={addEnteredInput}
        label="Description"
        variant="outlined"
      />

      <TextField
        sx={{ m: 1.5 }}
        type="amount"
        // value={enteredInput.amount}
        name="amount"
        onChange={addEnteredInput}
        label="Amount"
        variant="outlined"
      />
      <br />

      <Button
        sx={{
          width: { sx: 100, sm: 200, md: 300 },
          marginTop: 2,
          color: "white",
          borderColor: "white",
          variant: "contained",
        }}
        variant="contained"
        onClick={submitHandler}
        startIcon={<AddToQueueOutlined />}
      >
        Add Expense
      </Button>
    </div>
  );
};

export default ExpenseForm;
