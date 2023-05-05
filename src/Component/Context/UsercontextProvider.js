import { useState } from "react";
import UserContext from "./Usercontext";

const UserProvider = (props) => {
  const [errmessage, seterrormessage] = useState(null);
  const login = async (obj) => {
    console.log(obj);
    // const token = localStorage.getItem("token");
    try {
      const response = await fetch("http://localhost:5004/user/login", {
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
      alert("login success");
    } catch (err) {
      seterrormessage("enter valid password and email");
      alert("enter valid password and email");
      console.log(err);
    }
  };
  const signup = async (obj) => {
    console.log(obj);

    try {
      const response = await fetch("http://localhost:5004/user/signup", {
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
  return (
    <UserContext.Provider
      value={{
        signup: signup,
        errmessage: errmessage,
        seterrormessage: seterrormessage,
        login: login,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
