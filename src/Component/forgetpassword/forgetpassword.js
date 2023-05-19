import React, { useState, useContext } from "react";
// import "./Form.css";
import { Box, Button, Card, TextField, Stack } from "@mui/material";
import UserContext from "../Context/Usercontext";

import { LockOpenOutlined, LockReset } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Forgetpassword = () => {
  const [email, setemail] = useState("");

  const ctx = useContext(UserContext);
  const navigation = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await formHandler(email);
    alert("please verify your email to reset password");
    navigation("/");
    console.log(response);
  };
  return (
    <>
      <Card
        sx={{
          width: { xs: "100%", sm: 330, md: 330 },
          height: "100%",
          m: "35px auto",
          "--Card-radius": "15px",
          p: "30px",
          background: "lightgreen",
          borderRadius: "var(--Card-radius)",
        }}
      >
        <h2>Forget password</h2>
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
              id="filled-password-input"
              name="email"
              label="Enter Email"
              type="email"
              variant="filled"
              onChange={(e) => setemail(e.target.value)}
            />

            <div>
              <Button
                type="submit "
                variant="contained"
                startIcon={<LockReset />}
                // className={classes.button}
                sx={{ width: 250, borderRadius: 10 }}
              >
                Send Link
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
            startIcon={<LockOpenOutlined />}
            onClick={() => navigation("/")}
          >
            Login
          </Button>
        </div>
      </Card>
    </>
  );
};

export default Forgetpassword;

async function formHandler(enteredemail) {
  try {
    const response = await fetch(
      "http://23.21.23.89:3000/password/forgotpassword",
      {
        method: "POST",
        body: JSON.stringify({ email: enteredemail }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    if (data.error) {
      throw new Error(data.error);
    }

    return data;
    // console.log("forgetpassword", data);
  } catch (err) {
    return err;
    console.log(err);
  }
}
