import "./App.css";
import { Container, Paper } from "@mui/material";
import FormElememt from "./Component/Form/Form";
import ExpenseForm from "./Component/Expense-List/ExpenseForm/ExpenseForm";
import ExpenseList from "./Component/Expense-List/list/list";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getallExpense } from "./Store/Expense-thunk";
import PrimarySearchAppBar from "./Component/Navbar/Navbar";
import LeaderBoard from "./Component/LeaderBoard/LeaderBoard";
import { getLeaderBoard } from "./Store/LeaderBoard-thunk";

function App() {
  const dispatch = useDispatch();
  const call = useSelector((state) => state.expenseslice.iscall);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const ispremium = localStorage.getItem("ispremium");
    if (ispremium === "true") {
      dispatch(getallExpense(token));
      dispatch(getLeaderBoard(token));
    } else {
      dispatch(getallExpense(token));
    }
  }, [call]);

  const ispremium = localStorage.getItem("ispremium");
  return (
    <div className="App">
      <PrimarySearchAppBar></PrimarySearchAppBar>
      {/* <ListStyle></ListStyle> */}
      <FormElememt></FormElememt>
      {/* <ExpenseForm></ExpenseForm> */}

      <ExpenseList></ExpenseList>
      {ispremium == "true" && <LeaderBoard></LeaderBoard>}
    </div>
  );
}

export default App;
