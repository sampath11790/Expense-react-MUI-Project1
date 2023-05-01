import { useState } from "react";
import UserContext from "./Usercontext";

const UserProvider = (props) => {
  const [errmessage, seterrormessage] = useState(null);
  const signup = async (obj) => {
    console.log(obj);
    try {
      const response = await fetch("http://localhost:5000/user/signup", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (data.errors) {
        throw new Error(data.errors[0].message);
        return;
      }
      console.log("err", data);
      alert("successfull");
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
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
