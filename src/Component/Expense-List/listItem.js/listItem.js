import React, { useContext } from "react";
// import ExpenseContext from "../context/ExpenseContext";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../../Store/Expense-thunk";

const ListItem = ({ item }) => {
  const dispatch = useDispatch();
  // const ctx = useContext(ExpenseContext);
  return (
    <li key={item.id} style={{ fontSize: 20, listStyle: "none" }}>
      <span>{item.name}</span>--
      <span>{item.description}</span>--
      <span>{item.amount}</span>
      <button onClick={() => dispatch(deleteItem(item.id))}>Delete</button>
    </li>
  );
};

export default ListItem;
