import "./App.css";
import { Container, Pagination, Paper, ThemeProvider } from "@mui/material";
import FormElememt from "./Component/Form/Form";
import ExpenseList from "./Component/Expense-List/list/list";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PrimarySearchAppBar from "./Component/Navbar/Navbar";
import LeaderBoard from "./Component/LeaderBoard/LeaderBoard";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Forgetpassword from "./Component/forgetpassword/forgetpassword";
import ViewReports from "./Component/Reports/Report";
import DownloadedLinks from "./Component/Downloadbutton/downloadedLinks";
import { createTheme } from "@mui/material/styles";

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
  const darkMode = useSelector((state) => state.themeslice.ActiveMode);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div className={`App ${darkMode ? "dark" : "light"}`}>
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
          <Route path="/expense/download" element={<DownloadedLinks />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
