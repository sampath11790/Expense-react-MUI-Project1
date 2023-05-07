export const premiumRequest = (token) => {
  // "/purchase/premium"
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:5004/purchase/premium", {
        method: "GET",
        headers: {
          Authorization: token,
        },
      });
      const data = await response.json();
      if (!data.error) {
        console.log("getpremiumRequest", data);
        // sucesshandler(data)
      }
    } catch (err) {
      console.log(err);
    }
  };
};

// function succeshandler(obj){
//     var handlerdata={
//         "key":obj.key_id,
//        "order_id":obj.order.id,
//        "handler":(data)=>{
//         console.log("handler fun",data)
//        }

//     }
// }
