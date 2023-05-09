import React, { useContext, useEffect } from "react";
// import ExpenseContext from "../context/ExpenseContext";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../../Store/Expense-thunk";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import "./liststyle.css";
import { getLeaderBoard } from "../../../Store/LeaderBoard-thunk";
const ListItem = ({ item }) => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  // const ctx = useContext(ExpenseContext);

  function DeleteHandler(id, token) {
    const ispremium = localStorage.getItem("ispremium");
    dispatch(deleteItem(item.id, token));
  }
  return (
    <tr key={item.name} className="some">
      {/* <td>{item.date}</td> */}
      <td>{item.name}</td>
      <td>{item.description}</td>
      <td>{item.amount}</td>
      <td>
        {
          <IconButton
            aria-label="delete"
            size="small"
            color="red"
            onClick={() => DeleteHandler(item.id, token)}
          >
            <DeleteIcon />
          </IconButton>
        }
      </td>
    </tr>
    // <li key={item.id} style={{ fontSize: 20, listStyle: "none" }}>
    //   <span>{item.name}</span>--
    //   <span>{item.description}</span>--
    //   <span>{item.amount}</span>
    //   <button onClick={() => dispatch(deleteItem(item.id))}>Delete</button>
    // </li>
  );
};

export default ListItem;
