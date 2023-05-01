import React, { useState, useContext, useRef } from "react";
import "./Form.css";
import {
  Box,
  Button,
  Card,
  TextField,
  Stack,
  Paper,
  Typography,
  Avatar,
} from "@mui/material";
import UserContext from "../Context/Usercontext";
// import { Lock } from "@material-ui/icons";
import { PersonAdd } from "@mui/icons-material";
import { Lock, LockClockOutlined } from "@mui/icons-material";

const FormElememt = () => {
  const [user, setuser] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [toggle, settoggle] = useState("login");

  const confirmPassword = useRef(null);
  const ctx = useContext(UserContext);
  const onChangeHandler = (e) => {
    ctx.seterrormessage(" ");
    setuser({ ...user, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(user, confirmPassword);
    if (toggle == "signup") {
      if (user.password === user.confirmpassword) {
        ctx.signup(user);
      } else {
        alert("enter corrcet password");
      }
    }
    if (toggle == "login") {
      const obj = {
        email: user.email,
        password: user.password,
      };
      ctx.login(obj);
    }
  };
  return (
    <>
      <Card
        sx={{
          width: { xs: "100%", sm: 330, md: 330 },
          height: "100%",
          m: "25px auto",
          "--Card-radius": "15px",
          p: "20px",
          background: "lightgreen",
          borderRadius: "var(--Card-radius)",
        }}
      >
        {/* <h1>{toggle == "signup" ? "Sign Up" : "login"}</h1> */}

        <Paper
          sx={{
            backgroundColor: "#2E8B50",
            padding: 0.5,
            marginBottom: 2,
          }}
        >
          {/* <Typography variant="h5" component="h2" sx={{ color: "white" }}>
            {toggle == "signup" ? "Sign Up" : "login"} Form
          </Typography> */}
          <Box display="flex" flexDirection="row" alignItems="center">
            <Avatar sx={{ backgroundColor: "gold", marginRight: 2 }}>
              <LockClockOutlined sx={{ color: "#2E8B57" }} />
            </Avatar>
            <Typography
              variant="h5"
              component="h3"
              sx={{ color: "white", fontWeight: "bold" }}
            >
              {toggle == "signup" ? "SignUp" : "login"}
              <span style={{ color: "gold" }}> Form</span>
            </Typography>
          </Box>
        </Paper>
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
            {toggle == "signup" && (
              <TextField
                label="Name"
                name="name"
                type="text"
                variant="filled"
                onChange={onChangeHandler}
              />
            )}

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
            {toggle == "signup" && (
              <TextField
                label="Confirm Password"
                name="confirmpassword"
                type="password"
                variant="filled"
                onChange={onChangeHandler}
              />
            )}
            {/* <Box>
              <CustomButton type="submit ">Submit</CustomButton>
            </Box> */}
            <div>
              <Button
                variant="contained"
                startIcon={toggle == "signup" ? <PersonAdd /> : <Lock />}
                // className={classes.button}
                sx={{ width: 250, borderRadius: 10 }}
              >
                {toggle == "signup" ? "Sign Up" : "LogIn"}
              </Button>
            </div>
          </Stack>
        </form>
        <div>
          <Button
            variant="outlined"
            sx={{
              width: 300,
              marginTop: 2,
              color: "black",
              borderColor: "white",
              backgroundColor: "transparent",
            }}
            startIcon={toggle == "signup" ? <Lock /> : <PersonAdd />}
            onClick={() => {
              settoggle(toggle == "login" ? "signup" : "login");
            }}
          >
            {toggle == "signup" ? "Login" : "Sign up"}
          </Button>
        </div>
      </Card>
    </>
  );
};

export default FormElememt;
