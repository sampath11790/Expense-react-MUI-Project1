import "./App.css";
import React from "react";
import { ThemeProvider } from "@mui/material";
// import FormElememt from "./Component/Form/Form";
// import ExpenseList from "./Component/Expense-List/list/list";
import { Suspense, useEffect } from "react";
import { useSelector } from "react-redux";
// import PrimarySearchAppBar from "./Component/Navbar/Navbar";
// import LeaderBoard from "./Component/LeaderBoard/LeaderBoard";
import { Routes, Route, useNavigate } from "react-router-dom";
// import Forgetpassword from "./Component/forgetpassword/forgetpassword";
// import ViewReports from "./Component/Reports/Report";
// import DownloadedLinks from "./Component/Downloadbutton/downloadedLinks";
import { createTheme } from "@mui/material/styles";
//
const FormElememt = React.lazy(() => import("./Component/Form/Form"));
const ExpenseList = React.lazy(() =>
  import("./Component/Expense-List/list/list")
);
const PrimarySearchAppBar = React.lazy(() =>
  import("./Component/Navbar/Navbar")
);
const LeaderBoard = React.lazy(() =>
  import("./Component/LeaderBoard/LeaderBoard")
);
const Forgetpassword = React.lazy(() =>
  import("./Component/forgetpassword/forgetpassword")
);
const DownloadedLinks = React.lazy(() =>
  import("./Component/Downloadbutton/downloadedLinks")
);
const ViewReports = React.lazy(() => import("./Component/Reports/Report"));
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

  const token = localStorage.getItem("token");
  const darkMode = useSelector((state) => state.themeslice.ActiveMode);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<p className="loading">Loading .....</p>}>
        <div className={`App ${darkMode ? "dark" : "light"}`}>
          {token && <PrimarySearchAppBar></PrimarySearchAppBar>}
          <Routes>
            {token != "true" && (
              <Route path="/" element={<FormElememt></FormElememt>} />
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
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
