import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import UserProvider from "./Component/Context/UsercontextProvider";
import Store from "./Store/Store";
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={Store}>
    <UserProvider>
      <App />
    </UserProvider>
  </Provider>
);
