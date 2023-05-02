import React, { useContext } from "react";
import ListItem from "../listItem.js/listItem";
// import FormItem from "../Form/Form";
import { useSelector } from "react-redux";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import { Table } from "@mui/material";
// import ExpenseContext from "../context/ExpenseContext";
const initial = [
  {
    name: "some",
    description: "some ssssssssescription ",
    amount: "200",
  },
  { name: "some", description: "some description ", amount: "200" },
  { name: "some", description: "some description ", amount: "200" },
  { name: "some", description: "some description ", amount: "200" },
];
const ExpenseList = () => {
  // const dispatch = useDispatch();
  const data = useSelector((state) => state.expenseslice.data);
  // const ctx = useContext(ExpenseContext);
  // console.log(ctx.data);
  return (
    <div>
      {/* <FormItem></FormItem> */}
      <ExpenseForm></ExpenseForm>

      <Table
        stripe="odd"
        hoverRow
        sx={{ width: { sm: "100%", md: "60%" }, m: "0 auto", mt: 10 }}
      >
        {/* <caption>Nutrition of your favorite menus.</caption> */}
        <thead>
          <tr className="some">
            {/* <th>Date</th> */}
            <th>Name</th>
            <th>Description</th>
            <th>Amount&nbsp;(Rs)</th>
            <th>Button&nbsp;(icon)</th>
          </tr>
        </thead>
        <tbody>
          {[...data].map((each) => (
            // {initial.map((each) => (
            <ListItem key={each.id} item={each}></ListItem>
          ))}
        </tbody>
      </Table>
      {/* <ul>
        {[...data].map((each) => (
          <ListItem key={each.id} item={each}></ListItem>
        ))}
      </ul> */}
    </div>
  );
};

export default ExpenseList;
