// import { createChainedFunction } from "@mui/material"
import React, { createContext } from "react";

const UserContext = createContext({
  signup: () => {},
  login: () => {},
  errmessage: null,
  seterrormessage: () => {},
  authendication: null,
  authhandler: () => {},
  forgetpassword: () => {},
});

export default UserContext;
