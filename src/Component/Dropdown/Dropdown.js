import React, { useState, useMemo, useEffect } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch } from "react-redux";
import { getallExpense } from "../../Store/Expense-thunk";

function DropDownExpense({ totalcount = 17, page, pageCount, setPagecount }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const dispatch = useDispatch();
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   dispatch(getallExpense(token, page, pageCount));
  // }, [pageCount]);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
    const { myValue } = e.currentTarget.dataset;
    setPagecount(myValue);
    // console.log("myValue", myValue);
    setAnchorEl(null);
  };
  const pages = useMemo(() => Math.ceil(totalcount / 5), [totalcount]);
  const valueHandler = (event) => {
    const { myValue } = event.currentTarget.dataset;
    console.log(myValue);
  };
  return (
    <div>
      <Button
        id="Menu"
        aria-controls={open ? "Menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Select
      </Button>
      <Menu
        id="Menu"
        aria-labelledby="Menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {[...Array(pages)].map((_, index) => (
          <MenuItem
            data-my-value={(index + 1) * 5}
            onClick={handleClose}
            onChange={() => valueHandler((index + 1) * 5)}
          >
            {(index + 1) * 5}
          </MenuItem>
        ))}

        {/* <MenuItem onClick={handleClose}>10</MenuItem>
        <MenuItem onClick={handleClose}>15</MenuItem> */}
      </Menu>
    </div>
  );
}
export default DropDownExpense;
