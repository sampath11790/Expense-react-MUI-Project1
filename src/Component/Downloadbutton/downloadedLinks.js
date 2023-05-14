import React from "react";
import "./download.css";
import { useLocation, useNavigate } from "react-router-dom";
const DownloadedLinks = () => {
  const { state } = useLocation();
  console.log(state);

  return (
    <>
      <ol>
        {state.map((each) => (
          <li>
            <a href={each.Location}>Click</a>
          </li>
        ))}
      </ol>
    </>
  );
};

export default DownloadedLinks;
