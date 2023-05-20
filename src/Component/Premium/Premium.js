import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { getLeaderBoard } from "../../Store/LeaderBoard-thunk";
import { Box, ListItemText } from "@mui/material";
const Premium = () => {
  const dispatch = useDispatch();
  const LeaderBoarddata = useSelector(
    (state) => state.expenseslice.LeaderBoard
  );

  const token = localStorage.getItem("token");
  const ispremium = localStorage.getItem("ispremium");
  async function razorPayPaymentHandler(token) {
    const data = await askreqst(token);
    //test test
    console.log(data.key_id);
    //bsampath201-1@okaxis
    const options = {
      key: "",
      name: "sampath",
      description: "sampath payment test",
      order_id: data.order.id,
      handler: async (response) => {
        try {
          console.log("response", response);

          const dbresponse = await fetch(
            "http://23.21.23.89:3000/response/premium",
            {
              method: "post",
              body: JSON.stringify(response),
              headers: {
                Authorization: token,
                "Content-Type": "application/json",
              },
            }
          );
          const data = await dbresponse.json();
          if (!data.error) {
            console.log(data);
            alert("payment successfull");
          }
          localStorage.setItem("ispremium", true);
          dispatch(getLeaderBoard(token));
        } catch (err) {
          console.log(err);
        }
      },
      theme: {
        color: "#686CFD",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();

    rzp1.on("payment.failed", () => {
      alert("payment failed");
    });
  }
  // "Premium"
  return (
    <>
      {ispremium == "true" ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <img
            className="gif-img"
            src="https://c.tenor.com/9cYfCqKw0DwAAAAj/corona.gif"
            alt="crown"
          ></img>
          <ListItemText primary={"Premium User"} />
        </Box>
      ) : (
        <ListItemText
          onClick={() => razorPayPaymentHandler(token)}
          primary={"buy Premium"}
        />
      )}
    </>
  );
};

console.log("test");
export default Premium;
async function askreqst(token) {
  const response = await fetch("http://23.21.23.89:3000/purchase/premium", {
    method: "GET",
    headers: {
      Authorization: token,
    },
  });
  const data = await response.json();
  return data;
}
