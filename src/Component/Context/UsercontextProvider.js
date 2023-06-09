import { useState } from "react";
import UserContext from "./Usercontext";
import { useNavigate } from "react-router-dom";

const UserProvider = (props) => {
  const [errmessage, seterrormessage] = useState(null);
  const [authendication, setauthendication] = useState(null);
  const navigate = useNavigate();
  const login = async (obj) => {
    console.log(obj);
    // const token = localStorage.getItem("token");
    try {
      const response = await fetch("http://23.21.23.89:3000/user/login", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-Type": "application/json",
          // " Authorization": token,
        },
      });
      const data = await response.json();
      if (data.error) {
        throw new Error("");
        return;
      }
      console.log("data", data);
      localStorage.setItem("token", data.token);
      localStorage.setItem("ispremium", data.ispremium);

      alert("login success");
      setauthendication(true);
    } catch (err) {
      seterrormessage("enter valid password and email");
      alert("enter valid password and email");
      console.log(err);
    }
  };
  const signup = async (obj) => {
    console.log(obj);

    try {
      const response = await fetch("http://23.21.23.89:3000/user/signup", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (data.error) {
        throw new Error(data.errors[0].message);
        return;
      }
      console.log("", data);
      alert("successfull");
      return;
    } catch (err) {
      seterrormessage("email must be unique");
      alert("email must be unique");
      console.log(err);
    }
  };
  const authhandler = () => {
    localStorage.clear();
    setauthendication(false);
    // navigate("/");
  };
  return (
    <UserContext.Provider
      value={{
        signup: signup,
        errmessage: errmessage,
        seterrormessage: seterrormessage,
        login: login,
        authendication: authendication,
        authhandler: authhandler,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
