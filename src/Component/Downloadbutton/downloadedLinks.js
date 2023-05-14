import React from "react";
import cls from "./download.module.css";
import { useLocation, useNavigate } from "react-router-dom";
const DownloadedLinks = () => {
  const { state } = useLocation();
  console.log(state);

  return (
    <>
      <ol>
        {state.map((each) => (
          <li className={cls.listitem}>
            <a href={each.Location}>Click</a>
          </li>
        ))}
      </ol>
    </>
  );
};

export default DownloadedLinks;
