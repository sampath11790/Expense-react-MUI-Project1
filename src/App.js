import "./App.css";
import { Container, Paper } from "@mui/material";
import FormElememt from "./Component/Form/Form";
import ExpenseForm from "./Component/Expense-List/ExpenseForm/ExpenseForm";
import ExpenseList from "./Component/Expense-List/list/list";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getallExpense } from "./Store/Expense-thunk";
import PrimarySearchAppBar from "./Component/Navbar/Navbar";
// import ListStyle from "./Component/Expense-List/liststyle";

function App() {
  const dispatch = useDispatch();
  const call = useSelector((state) => state.expenseslice.iscall);
  useEffect(() => {
    const token = localStorage.getItem("token");
    dispatch(getallExpense(token));
  }, [call]);
  return (
    <div className="App">
      <PrimarySearchAppBar></PrimarySearchAppBar>
      {/* <ListStyle></ListStyle> */}
      <FormElememt></FormElememt>
      {/* <ExpenseForm></ExpenseForm> */}

      <ExpenseList></ExpenseList>
    </div>
  );
}

export default App;
