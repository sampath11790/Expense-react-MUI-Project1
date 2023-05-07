import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { premiumRequest } from "../../Store/Expense-thunk";
import { premiumRequest } from "../../Store/Premium-thunk";
const Premium = () => {
  async function razorPayPaymentHandler(token) {
    const data = await askreqst(token);

    console.log(data.key_id);
    //bsampath201-1@okaxis
    const options = {
      key: "",
      name: "sampath",
      description: "sampath payment test",
      order_id: data.order.id,
      handler: async (response) => {
        try {
          const paymentId = response.razorpay_payment_id;
          console.log("response", response);

          const dbresponse = await fetch(
            "http://localhost:5004/response/premium",
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

  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  return (
    <div>
      {/* <button onClick={() => dispatch(premiumRequest(token))}>
        buy Premium
      </button> */}
      <button onClick={() => razorPayPaymentHandler(token)}>buy Premium</button>
    </div>
  );
};
console.log("test")
export default Premium;
async function askreqst(token) {
  const response = await fetch("http://localhost:5004/purchase/premium", {
    method: "GET",
    headers: {
      Authorization: token,
    },
  });
  const data = await response.json();
  return data;
  if (!data.error) {
    console.log("getpremiumRequest", data);
    // sucesshandler(data)
    // data = data;
    console.log(data);
  }
}
