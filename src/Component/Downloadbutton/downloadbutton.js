import React from "react";
import { useNavigate } from "react-router-dom";
const DownloadButton = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const DownloadallLinks = async () => {
    try {
      const response = await fetch("http://localhost:5004/expense/download", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      const fetcheddata = await response.json();
      // console.log(fetcheddata);
      navigate("/expense/download", { state: fetcheddata.bucket });
    } catch (error) {
      console.error(error);
      return;
    }
  };

  return (
    <>
      <button onClick={DownloadallLinks}>DownloaReport</button>
    </>
  );
};

export default DownloadButton;
