import React, { useContext } from "react";
import ListItem from "../listItem.js/listItem";
// import FormItem from "../Form/Form";
import { useSelector } from "react-redux";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
// import ExpenseContext from "../context/ExpenseContext";

const ExpenseList = () => {
  // const dispatch = useDispatch();
  const data = useSelector((state) => state.expenseslice.data);
  // const ctx = useContext(ExpenseContext);
  // console.log(ctx.data);
  return (
    <div>
      {/* <FormItem></FormItem> */}
      <ExpenseForm></ExpenseForm>
      <ul>
        {[...data].map((each) => (
          <ListItem key={each.id} item={each}></ListItem>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
