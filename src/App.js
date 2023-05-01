import "./App.css";
import { Container, Paper } from "@mui/material";
import FormElememt from "./Component/Form/Form";
import ExpenseForm from "./Component/Expense-List/ExpenseForm/ExpenseForm";
import ExpenseList from "./Component/Expense-List/list/list";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getallExpense } from "./Store/Expense-thunk";

function App() {
  const dispatch = useDispatch();
  const call = useSelector((state) => state.expenseslice.iscall);
  useEffect(() => {
    dispatch(getallExpense());
  }, [call]);
  return (
    <Container className="App">
      {/* <FormElememt></FormElememt> */}
      {/* <ExpenseForm></ExpenseForm> */}
      <ExpenseList></ExpenseList>
    </Container>
  );
}

export default App;
