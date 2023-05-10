import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../Context/Usercontext";

const Logout = () => {
  const ctx = useContext(UserContext);
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.clear();
    ctx.authhandler();
    navigate("/");
  };
  return (
    <div>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
};

export default Logout;
