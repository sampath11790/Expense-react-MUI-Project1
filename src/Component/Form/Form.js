import React, { useState, useContext, useRef } from "react";
import "./Form.css";
import { Box, Button, styled, Card, TextField, Stack } from "@mui/material";
import UserContext from "../Context/Usercontext";

const CustomButton = styled(Button)({
  width: 200,
  background: "green",
  color: "black",
  marginTop: "10px",
  borderRadius: 20,
});

const FormElememt = () => {
  const [user, setuser] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const confirmPassword = useRef(null);
  const ctx = useContext(UserContext);
  const onChangeHandler = (e) => {
    ctx.seterrormessage(" ");
    setuser({ ...user, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(user, confirmPassword);
    if (user.password === user.confirmpassword) {
      ctx.signup(user);
    } else {
      alert("enter corrcet password");
    }
  };
  return (
    <>
      <Card
        sx={{
          width: { xs: "100%", sm: 400, md: 400 },
          height: 400,
          m: "30px auto",
          "--Card-radius": 5,
          p: "20px",
          background: "lightgreen",
        }}
      >
        <h1>Signup</h1>
        <p style={{ color: "red" }}>{ctx.errmessage}</p>
        <form onSubmit={submitHandler}>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "column",
              margin: "0 auto",
            }}
            spacing={2}
          >
            <TextField
              label="Name"
              name="name"
              type="text"
              variant="filled"
              onChange={onChangeHandler}
            />

            <TextField
              id="filled-password-input"
              name="email"
              label="Email"
              type="email"
              variant="filled"
              onChange={onChangeHandler}
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              variant="filled"
              onChange={onChangeHandler}
            />
            <TextField
              label="Confirm Password"
              name="confirmpassword"
              type="password"
              variant="filled"
              onChange={onChangeHandler}
            />
            <Box>
              <CustomButton type="submit ">Submit</CustomButton>
            </Box>
          </Stack>
        </form>
      </Card>
    </>
  );
};

export default FormElememt;
