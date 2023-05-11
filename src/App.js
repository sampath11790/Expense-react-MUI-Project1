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
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Forgetpassword from "./Component/forgetpassword/forgetpassword";
import ViewReports from "./Component/Reports/Report";

function App() {
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // navigate("/expenselist");
    } else {
      navigate("/");
    }
  }, []);
  const ispremium = localStorage.getItem("ispremium");
  const token = localStorage.getItem("token");
  return (
    <div className="App">
      {token && <PrimarySearchAppBar></PrimarySearchAppBar>}
      <Routes>
        {token != "true" && (
          <Route path="/" element={<FormElememt></FormElememt>} />
          // <Route path="/" element={<ViewReports />} />
        )}
        {token != "true" && (
          <Route
            path="/forgetpassword"
            element={<Forgetpassword></Forgetpassword>}
          />
        )}
        <Route
          path="/expenselist"
          element={<ExpenseList></ExpenseList>}
        ></Route>

        {/* {ispremium == "true" && ( */}
        <Route path="/leaderboard" element={<LeaderBoard></LeaderBoard>} />
        {/* )} */}

        <Route path="/viewreport" element={<ViewReports />} />
      </Routes>
    </div>
  );
}

export default App;
